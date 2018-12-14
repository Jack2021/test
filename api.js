const express = require('express')
const bearerToken = require('express-bearer-token');
const bodyParser = require("body-parser");

const app = express()
const PORT = process.env.PORT || 3000

app.use(bearerToken());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World! Visit <a href="/team">/team</a> for team members'));