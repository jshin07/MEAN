var express = require ("express");
var path = require("path");
var bodyParser = require ("body-parser");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mong2_db');

var app= express();

app.use(bodyParser.urlencoded({extended: true}));

////// MODEL & SCHEMA /////////////////
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var APISchema = new mongoose.Schema({
    name: {type: String,  required: true}
});
var API = mongoose.model('API', APISchema);
//////////////////////////////////////////

app.get('/', function(req, res){
    API.find({}, function (err, all){
        res.json(all)
    })
})

app.get('/new/:name/', function(req, res){
    var person = new API({
        name: req.params.name
    })
    console.log(person);
    person.save(function(err){
        if (err){
            console.log(err)
        }
        res.redirect('/');
    })
})

app.get('/remove/:name/', function(req, res){
    API.remove({name: req.params.name}, function(err){
        if(err){
            console.log(err);
        }
        res.redirect('/')
    })
})



app.listen(8000, function(){
    console.log("listening on port 8000");
})
