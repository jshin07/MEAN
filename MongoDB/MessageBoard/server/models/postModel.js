var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: {type: String, minlength: 4, required: true},
    message: {type: String , required: true},
    _comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true});

mongoose.model('Post', PostSchema);
