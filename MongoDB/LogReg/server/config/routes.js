var user = require('../controllers/controller.js'  )

module.exports = function(app){
    app.get('/', user.index);
    app.post('/register', user.register);
    app.post('/login', user.login);


}
