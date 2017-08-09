var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:1},
    quote: {type: String, required: true, minlength:1},
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);
