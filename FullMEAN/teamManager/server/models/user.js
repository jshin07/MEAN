var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        min: [2, 'Name Must be More than 2 characters'],
        required: [true, "First name is required"],
        trim: true
    },
    last_name: {
        type: String,
        min: [2, 'Name Must be More than 2 characters'],
        required: [true, "Last name is required"],
        trim: true
    },
    email: {
        type: String,
        minlength: 2,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        validate: {
        validator: function(email){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }, message: "Invalid Email"}
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        required: [true, "Password is required"],
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
      },

    password_conf: {
        type: String,
        minlength: 8,
        required: true,
        validate: {
            validator: function(value){
                return value == this.password;
            }, message: "Password do not match"
        }
    },
  },
    {timestamps: true}
);

UserSchema.pre('save', function(next){
    const self= this;
    bcrypt.hash(this.password, 10, function(err, hashedPassword){
        if(err){
            console.log(err);
            return
        }
        console.log(hashedPassword);
        self.password = hashedPassword;
        next();
    })
})

mongoose.model('User', UserSchema);
