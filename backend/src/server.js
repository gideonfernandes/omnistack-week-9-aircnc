const express = require('express');
const dbConnection = require('../config/dbConnection');
const routes = require('./routes');

const app = express();

dbConnection();

app.use(express.json());
app.use(routes);

app.listen(3333);
