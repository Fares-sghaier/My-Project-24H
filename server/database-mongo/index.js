var mongoose = require("mongoose");
var mongoUri = "mongodb://localhost/mvp";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
var db = mongoose.connection;

module.exports = db