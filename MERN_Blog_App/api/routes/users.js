const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE

router.put("/:id", async (req, res) => {
  if (req.body._id === req.params.id) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can update only your user");
  }
});

router.delete("/:id", async (req, res) => {
  if (req.body._id === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: req.body.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted ...");
      } catch (error) {
        res.status(404).json("User not found ...");
      }
    } catch (error) {}
  } else {
    res.status(401).json("You can delete only your user");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...orthers } = user._doc;

    res.status(200).json(orthers);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
