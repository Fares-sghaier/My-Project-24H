const Item = require("../database-mongo/models/Item.model.js");
const router = require("express").Router();

router.get("/get", (req, res) => {
  Item.find({})
    .then((items) => {
      console.log("GETTING FROM THE DATA SUCCESSFULY");
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}); //tested
router.post("/post/list",(req,res)=>{
   Item.insertMany({
     price:req.body.price,
     image:req.body.image,
     name:req.body.name,
   })
   .then((items)=>{
     res.status(200).send(items)
   })
   .catch((error)=>{
     res.status(500).send(error)
   })
}) //tested

module.exports = router;
