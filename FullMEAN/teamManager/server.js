const express = require ("express");
const path = require("path");
const bodyParser = require ("body-parser");
const app= express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./public/teamManager/dist")));



require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function(){
    console.log("listening on port 8000");
})
