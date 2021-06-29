
const express = require('express');
const bodyparser = require('body-parser');

require('dotenv').config();
const weathercont = require('./controllers/weathercontroller');
const botcont = require('./controllers/watsoncontroller');

var app = express();
app.use(bodyparser.json());

//Get Current Weather
app.post('/currentweather',weathercont.currentweather)

//Get Weather Forecast 
app.post('/weatherforecast', weathercont.weatherforecast)

app.get('/', function (req, res) {
  res.send('It Works');
})

app.post('/ask', botcont.ask);
app.post('/init',botcont.init);

app.post('/weathertest', function (req, res) {
 console.log(req.body);
 res.json(req.body);
})

const port = process.env.port || 9000;

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Weather API listening at http://%s:%s", host, port)
})