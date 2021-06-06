const router = require("express").Router();

let Excercise = require("./../models/excercise.model");

//==============GET ALL===============
router.route("/").get((req, res) => {
  Excercise.find()
    .then((Excercises) => res.json(Excercises))
    .catch((err) => res.status(400).json("Error:" + err));
});

//==============GET EXCERCISE BY ID===============
router.route("/:id").get((req, res) => {
  Excercise.findById(req.params.id)
    .then((Excercises) => res.json(Excercises))
    .catch((err) => res.status(400).json("Error:" + err));
});

//==============DELETE EXCERCISE BY ID===============
router.route("/:id").delete((req, res) => {
  Excercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Excercises deleted!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

//==============ADD EXCERCISE BY ID===============
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExcercise = new Excercise({ username, description, duration, date });

  newExcercise
    .save()
    .then(() => res.json("Excercise added!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

//==============UPDATE EXCERCISE BY ID===============
router.route("/update/:id").post((req, res) => {
  Excercise.findById(req.params.id)
    .then((ex) => {
      ex.username = req.body.username;
      ex.description = req.body.description;
      ex.duration = Number(req.body.duration);
      ex.date = Date.parse(req.body.date);

      ex.save()
        .then(() => res.json("Excercise Updated!"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
