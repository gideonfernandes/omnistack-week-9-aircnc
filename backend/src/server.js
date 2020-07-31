const express = require('express');
const dbConnection = require('../config/dbConnection');
const cors = require('cors');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log('Usuário conectado.', socket.id);
});

dbConnection();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(8888);
