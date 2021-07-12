const router = require("express").Router();
const Message = require("../models/Message");
const User = require("../models/User");
//ADD MESSAGE
router.post("/", async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();

    var data = await Message.aggregate([
      { $match: { _id: savedMessage._id } },
      {
        $project: {
          sender: {
            $toObjectId: "$sender",
          },
          fileName:1,
          _id:1,
          text:1,
          conversationId:1,
          createdAt:1



        },
      },
      {
        $lookup: {
          from: User.collection.name,
          let: { senderId: "$sender" },
          pipeline: [{ $match: { $expr: { $eq: ["$$senderId", "$_id"] } } }],
          as: "User",
        },
      },
    ]);
    res.status(200).json(data[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET MESSAGE
router.get("/:conversationId", async (req, res) => {
  try {
    const Messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    
    var data = await Message.aggregate([
      { $match: { conversationId: req.params.conversationId } },
      {
        $project: {
          sender: {
            $toObjectId: "$sender",
          },
          fileName:1,
          _id:1,
          text:1,
          conversationId:1,
          createdAt:1



        },
      },
      {
        $lookup: {
          from: User.collection.name,
          let: { senderId: "$sender" },
          pipeline: [{ $match: { $expr: { $eq: ["$$senderId", "$_id"] } } }],
          as: "User",
        },
      },
    ]);
  
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET MESSAGE
router.get("/getLastMessage/:conversationId", async (req, res) => {
  try {
    const Messages = await Message.find({
      conversationId: req.params.conversationId,
    })
      .limit(1)
      .sort("-createdAt");

    res.status(200).json(Messages);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
