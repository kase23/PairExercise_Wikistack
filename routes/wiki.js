const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("get at /wiki/");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("got to POst /wiki/");
});

router.get("/add", (req, res) => {
  res.send("get at wiki/add");
});

module.exports = router;
