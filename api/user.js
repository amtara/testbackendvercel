const express = require("express");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    user: "maka",
    age: 24,
  });
});

router.get("/lists", (req, res) => {
  res.json({
    user: "list",
    age: 24,
  });
});

module.exports = router;
