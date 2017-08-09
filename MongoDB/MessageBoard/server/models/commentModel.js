var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
    name: {type: String, minlength: 4, required: true},
    comment: {type: String,required: true},
    _post: {type: Schema.Types.ObjectId, ref: "Post"}
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);
