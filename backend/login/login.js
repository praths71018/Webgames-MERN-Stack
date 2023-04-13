// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import NavBar from "../../src/components/NavBar.js";

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

app.post("/login", function (req, res) {
  var email = req.body.email;
  var phone = req.body.phone;

  var data = {
    email: email,
    phone: phone,
  };

  db.collection("account").findOne(data, function (err, result) {
    if (err) throw err;
    console.log("Record Found Successfully");
    console.log(result.name);

    app.post("http://localhost:8080/response.html", function (req, res) {
      res.send("<p>Hi " + result.name + "</p>");
    });

    return res.redirect("response.html");
    // app.post("http://localhost:3000/#", function (req, res) {
    //   res.render(NavBar);
    // });
  });
});

app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    return res.redirect("login.html");
  })
  .listen(8080);

console.log("server listening at port 8080");
