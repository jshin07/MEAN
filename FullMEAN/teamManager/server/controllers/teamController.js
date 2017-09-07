var mongoose = require('mongoose');
var Player = mongoose.model("Player");
mongoose.Promise = global.Promise;

module.exports= {
    index: function(req, res){
        Player.find({},function(err, players){
            if(err){
                console.log(err);
                res.status('error').json();
            } else {
                res.json(players)
            }
        })
    }
/////////////////
    // register: function(req, res){
    //     User.find({email: req.body.email}, function(err, user){
    //         if(user.length > 0){
    //             console.log("User already exist in the database")
    //         }
    //         else {
    //             var user = new User(req.body);
    //             user.save(function(err){
    //                 if(err){
    //                     console.log(err)
    //                 }
    //             })
    //         }
    //         res.redirect('/')
    //     })
    // },

    // login: function(req, res){
    //     User.findOne({email: req.body.email}, function(err, user){

    //         if(user == null){
    //             console.log("User not found");
    //         }

    //         else if(bcrypt.compareSync(user.password, req.body.password) !== true){
    //             console.log("password do not match")
    //         }


    //         res.redirect('/')
    //     })
    // }

}
