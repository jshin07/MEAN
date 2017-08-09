
var mongs = require('../controllers/mongsController.js'  )

module.exports = function(app){

    app.get('/', mongs.index);
    // app.get('/', function(req, res){
    //     res.render('index');
    // })
    app.get('/mongooses/new', mongs.new);
    app.post('/mongooses', mongs.create)
    app.get('/mongooses', mongs.index); // can't do function(req, res){ res.render('index')}
    app.get('/mongooses/:id', mongs.info);
    app.get('/mongooses/edit/:id', mongs.edit);
    app.post('/mongooses/:id', mongs.update);
    app.get('/mongooses/destroy/:id', mongs.destroy);


}
