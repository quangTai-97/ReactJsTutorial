const {
  agreeFriend,
  refuseFriend,
  pendingRequest,
  addFriend,
} = require("./common");

const router = require("express").Router();
const Conversation = require("../models/Conversation");
const User = require("../models/User");



router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
    status: addFriend,
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get conv of a user
router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/getall/:userId", async (req, res) => {
  try {
    const ids = [];
    const obj = {};
    const userIdInConversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });


  var data = await User.aggregate([
    {
      $project: {
        _id: {
          $toString: "$_id"
        }
      }
    },
    { $lookup: {
      from: Conversation.collection.name,
      let: { userId: "$_id" },
      pipeline: [
        { "$match": { "$expr": { "$in": [ "$$userId", "$members" ] } } }
      ],
      as: "output"
    }}
  ]);
    data.map((c)=>{
      if(c._id === req.params.userId)
      {
        c.output.map((d)=>{
          ids.push(
            {
              id : d.members[1],
              status : d.status,
              conversationId: d._id
            });
        }
        )
      
      }
    })
    var user = await User.aggregate([
      {
        $addFields: {
           "status": "",
           "conversationId":""
        }
     },
     {
       $project:{
         _id:1,
         username:1,
         status:1,
         profilePicture:1,
         conversationId:1

       }
     }
    ]);

    user.map((userId)=>{

        ids.map((idId)=>{
          if(idId.id === userId._id.toString())
          {
            userId.status = idId.status;
            userId.conversationId =  idId.conversationId;
          }
        })

    });


    //console.log('user',req.params.userId);
  //console.log('user',user.find( { _id: { $ne: req.params.userId } } ));

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
