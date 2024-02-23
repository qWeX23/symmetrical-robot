const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const socketConfig = require('./config/socketConfig');
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Database
db.connect();

// Setup routes
app.get('/', (req, res) => {
    console.log('Hello World'); 
    res.send('Hello World');
});
app.get('/version', (req, res) => {
    res.send({ version });
});
app.post("/navigator", );
app.post('/metrics', );


const server = http.createServer(app);
const io = socketIo(server);
socketConfig(io); // Setup Socket.IO

const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`Server listening on port ${port}`));
