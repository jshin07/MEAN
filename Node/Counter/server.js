var express = require ("express");
var path = require("path");
var bodyParser = require ("body-parser");
var session = require("express-session");
var app= express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({secret:'secretkey'}));
app.get('/', function(req, res){
    // req.session.destroy();
    if(req.session.count == null || req.session.count == undefined){
        req.session.count =0;
    } else{
        req.session.count++;
    }
    res.render("index", {count: req.session.count});
})

app.get('/click',function(req,res){
    req.session.count +=1;

    res.redirect("/");
})


app.get('/reset',function(req,res){
    req.session.destroy();
    res.redirect("/");
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})
