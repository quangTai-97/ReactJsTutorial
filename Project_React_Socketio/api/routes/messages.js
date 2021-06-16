const router = require("express").Router();
const Message = require("../models/Message");

//ADD MESSAGE
router.post("/", async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
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

    res.status(200).json(Messages);
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
