var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        min: [2, 'Name Must be More than 2 characters'],
        required: [true, "First name is required"],
        trim: true
    },

    preffered_position: {
        type: String,
        min: [2, 'Must be More than 2 characters'],
        trim: true
    },

    status: {
        type: Object
    }
},
    {timestamps: true}
);


mongoose.model('Player', PlayerSchema);
