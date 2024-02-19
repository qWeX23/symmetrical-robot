const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
app.use(express.static('public'));

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // Add more event listeners for your game events here
    // For example:
    // socket.on('move', (data) => {
    //     // handle move event
    // });
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is running on port ${port}`));