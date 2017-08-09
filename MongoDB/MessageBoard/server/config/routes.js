var posts = require('../controllers/postController.js'  )

module.exports = function(app){
    app.get('/', posts.index);
    app.post('/post', posts.createP);
    app.post('/comment/:id', posts.createC);


}
