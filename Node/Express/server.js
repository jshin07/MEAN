var express = require("express");
var path= require("path");
var app= express();
app.use(express.static(path.join(__dirname +"./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine' , 'ejs');
app.get('/', function(req, res){
    res.render("index");
})

// This returns io object-- named server
var server = app.listen(8000,function(){
    console.log("listening on port 8000");
});

// Pass "server" object to the socket with listen method -- to get io object
var io = require('socket.io').listen(server);


// With the io object we get from above.. use .sockets method to turn on
io.sockets.on('connection', function(socket){
    console.log("Client/socket is connected!");
    console.log("Client/scoket id is :" , socket.id);

    socket.on( "button_clicked", function (data){
        console.log( 'Someone clicked a button!  Reason: '  + data.reason);
        socket.emit( 'server_response', {response:  "sockets are the best!"});
    })

})
