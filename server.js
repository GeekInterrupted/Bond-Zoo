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

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.  

var uristring =
    process.env.MONGODB_URI || 'mongodb://localhost/bondanimals';

// The http server will listen to an appropriate port, or default to
// port 5000.

var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.

mongoose.connect(uristring, function(err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }

});
var db = mongoose.connection;


//set up express app
var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/all", function(req, res) {
    Animal.find({},
        function(error, found) {
            if (error) {
                console.log(error);
            } else {
                res.json(found);
            }
        });

});

app.get("/name", function(req, res) {
    Animal.sort({ name: 1 }, function(error, found) {
        if (error) {
            console.log(error);
        } else {
            res.json(found);
        }
    });
});

app.get("/weight", function(req, res) {
    Animal.sort({ weight: -1 }, function(error, found) {
        if (error) {
            console.log(error);
        } else {
            res.json(found);
        }
    });
});

app.listen(PORT, function() {
    console.log("Express server listening on port : " + PORT);
});