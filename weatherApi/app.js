const request = require('request');
const argv = require('yargs').argv;
const express = require('express');
const bodyparser = require('body-parser');


var app = express();
app.use(bodyparser.json());

app.get('/', function (req, res) {
   res.send('It Works');
})

app.post('/', function (req, res) {
  console.log(req.body)
  res.json(req.body)
})

let apiKey = '6115365f8f294414800126a2825e8d1f';
let city = argv.c || 'Khartoum';
let country = argv.d || 'Sudan';

let url = `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${apiKey}`;


app.get('/current', function (req, res) {
request(url, function (err, res, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    // console.log(weather);
    // res.send(weather);
  }
});
})

const port = process.env.port || 9000;

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Weather API listening at http://%s:%s", host, port)
})