var mongoose = require('mongoose');
var Quote = mongoose.model("Quote");
var moment = require('moment');


function Quotes(){
    this.index = function(req, res){
        res.render('index')
    }

    this.create = function(req, res){
        var quote = new Quote(req.body);
        quote.save(function(err){

            if(err){
                Quote.find({}, function(err, quote){
                    res.render('index', {title: "you have errors!", errors: err })
                })
            } else {
                res.redirect('/quotes')
            }
        })
    }

    this.show = function(req, res){
        Quote.find({}, function (err, quote){
        res.render('show', {quotes: quote , moment: moment} )
        })
    }


}


module.exports = new Quotes();
