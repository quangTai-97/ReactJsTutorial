const { agreeFriend, refuseFriend, pendingRequest, addFriend } = require('./common');


const router = require("express").Router();
const Conversation = require("../models/Conversation");
const User = require("../models/User");


//new conversation Add Friend
router.post("/", async (req, res) => {
  
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
    status:addFriend
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
    const userIdInConversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });

   
    const getAllUser = await  User.find().forEach(
      function (newBook) {
          newBook.category = db.categories.findOne( { "_id": newBook.category } );
          newBook.lendings = db.lendings.find( { "book": newBook._id  } ).toArray();
          newBook.authors = db.authors.find( { "_id": { $in: newBook.authors }  } ).toArray();
          db.booksReloaded.insert(newBook);
      }
  );

    res.status(200).json(getAllUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
