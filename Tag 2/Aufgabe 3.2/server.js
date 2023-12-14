// server.js

const express = require('express');
const getWeather = require('./getWeather');
const app = express();
const port = 3000;

app.get('/', async (request, response) => {
  try {
    const temperature = await getWeather();
    response.send(`Temperature: ${temperature}`);
  } catch (error) {
    response.status(500).send(`Error: ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
