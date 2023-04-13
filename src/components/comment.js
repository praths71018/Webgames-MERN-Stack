var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/webgames");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});

var app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/comment", function (req, res) {
  var comment = req.body.comment;
  var name = req.body.name;
  var email = req.body.email;

  var data = {
    comment: comment,
    name: name,
    email: email,
  };

  console.log(data);

  db.collection("comment").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });
});

app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
  })
  .listen(4000);

console.log("server listening at port 4000");
