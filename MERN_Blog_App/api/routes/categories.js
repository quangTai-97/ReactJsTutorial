const router = require("express").Router();
const Category = require("../models/Category");

//POST
router.post("/", async (req, res) => {
  try {
    var category = new Category({
      name: req.body.name,
    });

    var cate = await category.save();
    res.status(200).json(cate);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET

router.put("/:categoryId", async (req, res) => {
  try {
    var category = await Category.findById(req.params.categoryId);
    category.name = req.body.name;
    var cate = await category.save();
    res.status(200).json(cate);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
