const request = require('request');
const cloudantdb = require('../services/cloudant');
require('dotenv').config();

const baseUrl = process.env.WEATHER_API_BASE_URL;
let apiKey = process.env.WEATHER_APIKEY;
let city = 'Khartoum';
let country = 'Sudan';

///Gets the Current Weather for a city
 exports.currentweather = function (_req, _res) {
    let url = `${baseUrl}current?city=${_req.body.city}&country=${_req.body.country}&key=${apiKey}`;
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
}
  
  
  ///Gets the Weather forcast for a city
 exports.weatherforecast = function (_req, _res) {
    let url = `${baseUrl}forecast/daily?city=${_req.body.city}&country=${_req.body.country}&days=16&key=${apiKey}`;
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
  }