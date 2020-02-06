const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const moviesRoute = require('./routes/movies');
const cors = require('cors');
require('dotenv/config');


app.use(cors());
app.use(bodyParser.json()); 
app.use('/movies', moviesRoute);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected with db');
}); 

// How to we start listening to the server
app.listen(3000);