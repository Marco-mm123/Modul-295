const express = require('express');
const app = express();
const port = 3000;

app.get('/:plz', (request, response) => {
  response.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});