var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:1},
    email: {type: String, required: true, minlength:1},
    age: {type: Number, required: true, minlength:1}
}, {timestamps: true});

mongoose.model('Student', StudentSchema); //TELL MONGOOSES THAT THERE'S A "STUDENT" MODEL IN THE SCHEMA
