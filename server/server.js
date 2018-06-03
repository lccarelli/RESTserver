require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));



mongoose.connect('mongodb://weather:weather@ds247648.mlab.com:47648/weatherappdb', (err,res) => {
  if (err) throw err;
  console.log('conectado a la bd ok!')
});


app.listen(process.env.PORT, () => {
  console.log('Example app listening on port', process.env.PORT);
});
