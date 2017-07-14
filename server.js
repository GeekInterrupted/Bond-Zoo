var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");


//mongoose schema definition

Schema = new mongoose.Schema({
    id: String,
    name: String,
    class: String,
    legs: Number,
    weight: Number,
    petName: String,
    reference: String
});

Animal = mongoose.model("Animal", Schema);

//connection to mongoose

mongoose.connect(process.env.MONGOLAB_URI, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection succeded");
    }
});

var app = express();
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

// var databaseUrl = "localhost:27017/bondanimals";
// var collections = ["animals"];

// var db = mongojs(databaseUrl, collections);

// db.on("error", function(error) {
//     console.log("database error", error);
// });

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/all", function(req, res) {
    db.animals.find({},
        function(error, found) {
            if (error) {
                console.log(error);
            } else {
                res.json(found);
            }
        });

});

app.get("/name", function(req, res) {
    db.animals.find().sort({ name: 1 }, function(error, found) {
        if (error) {
            console.log(error);
        } else {
            res.json(found);
        }
    });
});

app.get("/weight", function(req, res) {
    db.animals.find().sort({ weight: -1 }, function(error, found) {
        if (error) {
            console.log(error);
        } else {
            res.json(found);
        }
    });
});

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});