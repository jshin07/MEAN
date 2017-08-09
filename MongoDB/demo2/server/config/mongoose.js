var mongoose = require('mongoose');
var fs = require ('fs');
var path = require('path');
mongoose.connect = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >=0){
        require(models_path + '/'+ file);
    }
});