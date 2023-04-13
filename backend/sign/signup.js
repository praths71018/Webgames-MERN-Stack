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

app.post("/sign_up", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var Age = req.body.Age;

  var data = {
    name: name,
    email: email,
    phone: phone,
    Age: Age,
  };

  console.log(data);

  if (db.collection("account").find({ email: email }) == true) {
    console.log("User exists");
    // close();
  } else {
    db.collection("account").insertOne(data, function (err, collection) {
      if (err) throw err;
      console.log("Record inserted Successfully");
      res.redirect("response.html");
      // close();
    });
  }
});

app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    return res.redirect("signup.html");
  })
  .listen(8000);

console.log("server listening at port 8000");
