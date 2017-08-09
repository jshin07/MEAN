var students = require('../controllers/students.js')

module.exports = function(app){
    // app.get('/', function(req, res){
    //     students.index(req, res);
    // });
    app.get('/', students.index);
    app.post('/students', students.create);




}

// 1. User navigates to the slash routes
// 2. Application router sees the navigation and runs the student.index function, passing the function a request resposnse object
//
// function express() {
//     this.routes = {
//         get: {},
//         post: {},
//         put: {},
//         delete: {}
//     }
//     this.get = function(route, callback) {
//         this.routes['get'][route] = callback
//         // user hits get method, get he url
//         this.routes['get'][url](req, res)
//     }
// }
