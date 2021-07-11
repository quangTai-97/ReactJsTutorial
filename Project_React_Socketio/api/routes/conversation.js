const {
  agreeFriend,
  refuseFriend,
  pendingRequest,
  addFriend,
} = require("./common");

const router = require("express").Router();
const Conversation = require("../models/Conversation");
const User = require("../models/User");

//POST: CONVERSATION
router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
    status: pendingRequest,
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE STATUS: AGREE_FRIEND CONVERSATION
router.put("/", async (req, res) => {
  try {
    const savedConversation = await Conversation.findByIdAndUpdate(
      req.body._id,
      req.body
    );
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CONVERSATION TO USER_ID
router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
      status: agreeFriend,
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE CONVERSATION
router.delete("/:idConversation", async (req, res) => {
  try {
    const conversationcheck = await Conversation.findById(
      req.params.idConversation
    );

    if (conversationcheck != null) {
      const conversation = await Conversation.findByIdAndRemove(
        req.params.idConversation
      );
      res.status(200).json(conversation);
    } else {
      res.status(304).json("đã bị xoá");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CONVERSATION TO CONVERSATION_ID
router.get("/conversation/:conversationId", async (req, res) => {
  try {
    const conversation = await Conversation.findById(req.params.conversationId);

    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER_ID TO STATUS
router.get("/getall/:userId", async (req, res) => {
  try {
    const ids = [];

    //JOIN USER AND CONVERSATION GET CONVERSATION TO USER_ID
    var data = await User.aggregate([
      {
        $project: {
          _id: {
            $toString: "$_id",
          },
        },
      },
      {
        $lookup: {
          from: Conversation.collection.name,
          let: { userId: "$_id" },
          pipeline: [{ $match: { $expr: { $in: ["$$userId", "$members"] } } }],
          as: "output",
        },
      },
    ]);

    //ADD DATA INTO ARRAY
    data.map((c) => {
      if (c._id === req.params.userId) {
        c.output.map((d) => {
          if (c._id === d.members[0]) {
            ids.push({
              id: d.members.find((x) => x !== req.params.userId),
              status: d.status,
              conversationId: d._id,
              button: true,
            });
          } else {
            ids.push({
              id: d.members.find((x) => x !== req.params.userId),
              status: d.status,
              conversationId: d._id,
              button: false,
            });
          }
        });
      }
    });

    //GET ALL USER
    var user = await User.aggregate([
      {
        $addFields: {
          status: "",
          conversationId: "",
          button: false,
        },
      },
      {
        $project: {
          _id: 1,
          username: 1,
          status: 1,
          button: 1,
          profilePicture: 1,
          conversationId: 1,
        },
      },
    ]);

    user.map((userId) => {
      ids.map((idId) => {
        if (idId.id === userId._id.toString()) {
          userId.status = idId.status;
          userId.conversationId = idId.conversationId;
          userId.button = idId.button;
        }
      });
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
