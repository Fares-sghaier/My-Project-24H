const express = require("express");
const mongoose = require("mongoose");
const db = require("../database-mongo/index");
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
});

module.exports = router;
