const express = require("express");
const app = express();

app.listen(5001, () => {
  console.log("backend server run on port ");
});

app.get("/", (req, res) => {
  res.send(user);
  const user = [
    {
      user: 1,
      age: 2,
      personnage: "maka",
    },
    {
      user: 12,
      age: 2,
      personnage: "amir",
    },
    {
      user: 13,
      age: 2,
      personnage: "lolilo",
    },
  ];
});
