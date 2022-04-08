var mongoose = require("mongoose");
const db = require("../index.js");

var reviewSchema =  new mongoose.Schema({
  name: String,
  email:String,
  feedback: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
