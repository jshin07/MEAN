var mongoose = require('mongoose');

var MongSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String}
}, {timestamps: true});

mongoose.model('Mong', MongSchema);
