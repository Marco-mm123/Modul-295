// getWeather.js

const request = require('request');

const plz = process.argv[2];

function getWeather() {
  return new Promise((resolve, reject) => {
    const url = `https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${plz}00`;

    request.get({
      url: url,
      json: true,
      headers: { 'User-Agent': 'request' }
    }, (err, res, data) => {
      if (err) {
        reject(err);
      } else if (res.statusCode !== 200) {
        reject(`Status: ${res.statusCode}`);
      } else {
        const temp = data.currentWeather.temperature;
        resolve(temp);
      }
    });
  });
}

module.exports = getWeather;
