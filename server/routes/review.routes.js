const Review = require("../database-mongo/models/review.model.js");
const router = require("express").Router();


router.get("/review", (req, res) => {
  Review.find({})
    .then((items) => {
      console.log("Review DATA");
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}); //tested
router.post("/post/review",(req,res)=>{
    console.log(req.body,"comes")
    Review.insertMany({
    name:req.body.name,
    email:req.body.email,
    feedback:req.body.feedback
    })
    .then((items)=>{
        res.status(200).send(items)
    })
    .catch(error => {
        res.status(500).send(error)
    })
}) //tested
module.exports = router;