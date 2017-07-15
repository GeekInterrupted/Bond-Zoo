var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");


//set up express app
var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.use(express.static(__dirname + "/"));

app.get("/", function(req, res) {
    res.send(index.html);
});

app.get("/test", function(req, res) {
    res.send("Hello World");
})










app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port : " + PORT);
});