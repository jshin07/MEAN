var express = require ("express");
var path = require("path");
var bodyParser = require ("body-parser");
var app= express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// require('./server/config/routes.js')(app); // this is same thing as line 13 and 14


app.listen(8000, function(){
    console.log("listening on port 8000");
})



// 1. SERVER
// 2. CONFIG
        // MONGOOSE(to connect the DB) UNDER CONFIG  -- LOOK AT THE MODELS
        // ROUTES UNDER CONFIG -- TO FIND CONTROLLERS && EXPORTS THE ROUTES TO CONTROLLERS
// 3. CONTROLLER (PLUR)-- GET DB(MONGOOSE), CREATE METHODS, DO LOGIC, TO RENDER EJS -- REQUIRE MONGOOSE -- THEN EXPORTS THE OBJECT THAT YOU CREATED BACK TO ROUTES
// 4. MODEL DIR (SINGULAR FILE) -- CREATE SCHEMA (NEW MONGOOSE.SCHEMA({OBJECT})
// 5. EJS FILES
