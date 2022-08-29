const express = require("express");
const app = express();

app.listen(5001, () => {
  console.log("backend server run on port ");
});

app.get("/", (req, res) => {
  res.send("<h1>hello word</h1>");
});
