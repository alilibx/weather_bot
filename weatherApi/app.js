const request = require('request');
const argv = require('yargs').argv;

let apiKey = '6115365f8f294414800126a2825e8d1f';
let city = argv.c || 'Khartoum';
let country = argv.d || 'Sudan';

let url = `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${apiKey}`;

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It is ${weather.data[0].temp} degrees in ${weather.data[0].city_name},${weather.data[0].country_code} and the 
    sunrise will be at ${weather.data[0].sunrise}`;
    console.log(message);
    
  }
});