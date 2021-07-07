const {
  agreeFriend,
  refuseFriend,
  pendingRequest,
  addFriend,
} = require("./common");

const router = require("express").Router();
const Conversation = require("../models/Conversation");
const User = require("../models/User");
const Message = require("../models/Message");

//new conversation Add Friend
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
    userIdInConversation.map((x) => {
      obj._id = x.members.find((a) => a !== req.params.userId);

      obj.status = "agreeFriend";

      ids.push(obj);
    });

    const data = await ids.aggregate([
      {
        $lookup: {
          from: "User",
          let: { userid: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$userid", "$_id"],
                },
              },
            },
          ],
          as: "tagList",
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
