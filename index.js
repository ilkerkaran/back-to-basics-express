const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));
app.set("view engine", "ejs");
app.use('/', router);


app.listen(5000, () => 'App started on 5000');
