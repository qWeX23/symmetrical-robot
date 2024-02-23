const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { version } = require('./package.json');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(cors()); // Enable CORS
app.use((req, res, next) => {
  // Respond to preflight CORS requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  next();
});
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useUnifiedTopology: true,maxPoolSize: 10});
client
  .connect()
  .then(() => {console.log('Connected to MongoDB')})
  .catch(err => console.error(err));

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
    console.log('Received state update for room:', state.roomId);
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
app.post('/navigator', async (req, res) => {
  console.log('Received navigator object');
  const navData = {
    nav: req.body,
    date: new Date()
  };
  try {
    const collection = client.db("vala_score").collection("navigator_data");
    const result = await collection.insertOne(navData);
    console.log(`Navigator object saved with _id: ${result.insertedId}`);
    res.send('Navigator object saved');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving navigator object');
  }
});

app.post('/metrics', async (req, res) => {
    try {
      const collection = client.db("vala_score").collection("browser_metrics"); 
      const result = await collection.insertOne(req.body);
      console.log(`Metrics saved with _id: ${result.insertedId}`);
      res.send('Received metrics');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error saving metrics');
    }
});

port = process.env.PORT || 3001;
server.listen(port, () => console.log('Server listening on port', port));