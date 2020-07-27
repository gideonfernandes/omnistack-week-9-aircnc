const express = require('express');
const dbConnection = require('../config/dbConnection');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

dbConnection();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(8888);
