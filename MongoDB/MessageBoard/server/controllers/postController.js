var mongoose = require('mongoose');
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");


module.exports ={
    index: function(req, res){
        Post.find({})
        .populate('_comments')
        .exec(function(err, posts){
            res.render('index', {posts})
        })
    },

    createP: function(req, res){
        var post = new Post(req.body);
        post.save(function(err){
            if(err){
                console.log(err);
            }
            res.redirect('/')
        })
    },

    createC: function(req, res){
        Post.findOne({_id: req.params.id}, function(err, post){
            var comment = new Comment(req.body);
            // console.log(post);
            comment._post = post._id;
            comment.save(function(err){
                post._comments.push(comment);
                // console.log(comment);
                post.save(function(err){
                    if(err){
                        console.log(err);
                    }
                    res.redirect('/');
                })
            })
        })
    }








}
