const path = require('path');
const express = require('express');
const app = express();
const port = 9999; // Problems but a GA ain't one

app.use(express.static(
  path.join(__dirname, 'src/public/')
));

app.listen(port);
console.log(`Listening on ${port}`);