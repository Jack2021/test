const express = require('express')
const bodyParser = require("body-parser");
controller = require('./controller.js');

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/square(s)', controller.square_root);

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log('Example app listening on port:'+ PORT))
 }