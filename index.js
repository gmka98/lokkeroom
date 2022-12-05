const express = require("express");
const http = require("http").Server(app);

app.get("/", function (req, res) {
        res.sendFile(__dirname + "/index.html");
    });
     
    http.listen(3432, function () {
        console.log("HTTP server started on port 3000");
    });

    const io = require('socket.io')(http);
 
io.on('connection', function(socket){
    console.log('Client connection received');
});

io.on("connection", function (socket) {
        console.log("Client connection received");
        socket.emit("sendToClient", { hello: "world" });
        socket.on("receivedFromClient", function (data) {
            console.log(data);
        });
    });

    const socket = io();
 
socket.on('sendToClient', function (data) {
    console.log(data);
    socket.emit('receivedFromClient', { my: 'data' });
});