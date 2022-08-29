const express = require("express");
const user = require("./api/user");
const app = express();
app.use(express.json({ extended: false }));

app.listen(5001, () => {
  console.log("backend server run on port ");
});

app.get("/", (req, res) => {
  res.send("<h1>hello word</h1>");
});
