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

// MONGOLAB_URI: "mongodb://heroku_twz77bvw:sbq4sb84cpcg42a99ro7evs67d@ds023438.mlab.com:23438/heroku_twz77bvw"

// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------
// Connect to localhost if not a production environment
if (process.env.NODE_ENV == 'production') {
    mongoose.connect('mongodb://heroku_twz77bvw:sbq4sb84cpcg42a99ro7evs67d@ds023438.mlab.com:23438/heroku_twz77bvw');
} else {
    mongoose.connect('mongodb://localhost/27107');
}
var db = mongoose.connection;

// Show any Mongoose errors
db.on('error', function(err) {
    console.log('Mongoose Error: ', err);
});


var app = express();
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.use(express.static(__dirname + "/"));

app.get("/", function(req, res) {
    res.send("hello world!");
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

// var PORT = process.env.PORT || 3000;


// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });