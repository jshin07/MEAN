var mongoose = require('mongoose');
var Student = mongoose.model("Student");

function Students(){
    this.index = function(req, res){
        Student.find({},function(err, students){  //ERROR FIRST THEN DATA AS SECOND PARAM
            console.log(err);
            res.render('index', {students: students})
        })
    }
    this.create = function(req, res){
        var student = new Student({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        })
        // var student = new Student(req.body) -- this is same thing as line betwen 12 and 16

        student.save(function(err){
            console.log(err);
            // console.log(student.errors);
            // for (var i in err){
            //     console.log(i);
            // }
            if(err){
                Student.find({}, function(error, students){
                    res.render('index', {title: "you have errors!", errors: err.errors, students: students})
                })

            } else{
                    res.redirect('/')
            }
        });
    }

//let promise = Do something asynchronous
// promise.then()
    // app.post('/students', function(req, res){
    //     var student = new Student(req.body);
    //     student.create(function(err){
    //         if(err){
    //             res.render('index', {title: 'you have errors!', errors: student.errors})
    //         }
    //         else {
    //             res.redirect('/');
    //         }
    //     });
    // })


// function mongoose() {
//     this.save = function(callback) {
//         // connect to mongodb
//         // query the database to save the object and get error object
//         callback(new Error('there was an error querying the db'))
//     }
// }


}

module.exports =new Students()
