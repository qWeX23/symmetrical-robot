const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { version } = require('./package.json');

const app = express();
app.use(cors()); // Enable CORS

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Allow all origins
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');
  console.log(socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('stateUpdate', (state) => {
    console.log('Received state update:', state);
    socket.join(state.roomId);
    io.to(state.roomId).emit('playersUpdate', { state, socketId: socket.id });
  });
});

app.get('/', (req, res) => {
    console.log('Hello World');
  res.send('Hello World');
});
app.get('/version', (req, res) => {
  res.send({version});
});

port = process.env.PORT || 3001;
server.listen(port, () => console.log('Server listening on port', port));