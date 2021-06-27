const request = require('request');
const argv = require('yargs').argv;
const express = require('express');
const bodyparser = require('body-parser');
const cloudantdb = require('./cloudant');


var app = express();
app.use(bodyparser.json());

app.get('/', function (req, res) {
   res.send('It Works');
})


let apiKey = '6115365f8f294414800126a2825e8d1f';
let city = argv.c || 'Khartoum';
let country = argv.d || 'Sudan';


///Gets the Current Weather for a city
app.post('/currentweather', function (_req, _res) {
  let url = `https://api.weatherbit.io/v2.0/current?city=${_req.body.city}&country=${_req.body.country}&key=${apiKey}`;
  request(url, function (err,response, body) {
    if(err){
      _res.json("");
    } else {
      console.log(_req.body.city);
     let weather = JSON.parse(response.body);
      console.log(weather.data[0]);
      cloudantdb.createLogWebhok(JSON.stringify(_req.body),JSON.stringify(weather));
      _res.json(weather.data[0]);
    }
  });
})

app.post('/weathertest', function (req, res) {
  console.log(req.body);
  res.json(req.body);
})



///Gets the Weather forcast for a city
app.post('/weatherforecast', function (_req, _res) {
  let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${_req.body.city}&country=${_req.body.country}&days=16&key=${apiKey}`;
  request(url, function (err,response, body) {
    if(err){
      console.log('error:', error);
    } else {
      console.log(_req.body.city);
      let weather = JSON.parse(response.body).data;
      console.log(weather);
      let result = weather.filter(we => we.datetime === _req.body.date);
      _res.json(result);
    }
  });
})

const port = process.env.port || 9000;

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Weather API listening at http://%s:%s", host, port)
})