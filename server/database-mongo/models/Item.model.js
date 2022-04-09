const mongoose = require("mongoose");
const db = require("../index.js");

const productSchema = new mongoose.Schema({
  price: Number,
  image: String,
  name:String,
});

const Item = mongoose.model("Item", productSchema);

module.exports = Item;