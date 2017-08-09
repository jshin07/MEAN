var mongoose = require('mongoose');
var User = mongoose.model("User");
var bcrypt = require('bcrypt');

module.exports= {
    index: function(req, res){
        User.find({},function(err, user){
            res.render('index', {user})
        })
    },

    register: function(req, res){
        User.find({email: req.body.email}, function(err, user){
            if(user.length > 0){
                console.log("User already exist in the database")
            }
            else {
                var user = new User(req.body);
                user.save(function(err){
                    if(err){
                        console.log(err)
                    }
                })
            }
            res.redirect('/')
        })
    },

    login: function(req, res){
        User.findOne({email: req.body.email}, function(err, user){

            if(user == null){
                console.log("User not found");
            }

            else if(bcrypt.compareSync(user.password, req.body.password) !== true){
                console.log("password do not match")
            }


            res.redirect('/')
        })
    }

}
