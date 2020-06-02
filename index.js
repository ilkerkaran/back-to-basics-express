const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use('/', router);


app.listen(5000, () => console.log('App started on 5000'));
