var mongoose = require('mongoose');
var Mong = mongoose.model("Mong");

module.exports ={
    index: function(req, res){
        Mong.find({}, function(err, mongs){
            res.render('index', {mongs})
        })
    },
    create: function (req, res){
        var mong = new Mong(req.body);
        mong.save(function(err){
            if(err){
                console.log(err);
            }
            res.redirect('/mongooses')
        })
    },
    new: function(req, res){
        res.render('new')
    },

    info: function(req, res){
        var id = req.params.id;
        Mong.find({_id: id}, function(err, mong){
            if (err){
                console.log(err);
                res.redirect('/')
            }
            res.render('info', {mong})
        })

    },

    edit: function(req, res){
        var id = req.params.id;
        Mong.find({_id: id}, function(err, mong){
            if (err){
                res.redirect('/');
            }
            res.render('edit', {mong})
        })
    },


    update: function(req, res){
        var id = req.params.id;
        var mong= Mong.find({_id: id}, function(err, mong){
            mong = mong[0];
            mong.name = req.body.name;
            mong.description = req.body.description;
            mong.save(function(err){
                if(err){
                    console.log(err)
                }
                res.redirect('/')
            })

        })
    },

    destroy: function(req, res){
        var id = req.params.id;
        Mong.remove({_id:id}, function(err){
            if(err){
                console.log(err)
            }
            res.redirect('/');
        })

    }


}
