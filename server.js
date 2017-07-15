var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");




var app = express();
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.send(index.html);
});

app.get("/test", function(req, res) {
    res.send("Hello World");
})