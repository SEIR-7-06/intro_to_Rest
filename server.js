// Express is like the jQuery of Node - write less do mpre
const express = require("express");
const app = express(); // this will return a super object full of methods for building our server
const PORT = 4000;

const fruits = ["Apple", "Pear", "Banana", "Purple Grape"];

//-------------------- Routes

// All Fruits - INDEX
// the .get() method only handles get requests
// Takes 2 args:
// 1- Path to listen at
// 2- Function to run on request
app.get("/fruits", function (req, res) {
  // Callback function - always takes req/res args
  console.log("Fruits Index Route");

  res.send(fruits);
});

// One Fruit - SHOW
app.get("/fruits/:index", function (req, res) {
  const arrayIndex = req.params.index;
  const result = fruits[arrayIndex];
  res.send(result);
});

// Listen For Requests From Client
app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
