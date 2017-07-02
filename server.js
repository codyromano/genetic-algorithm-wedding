const path = require('path');
const express = require('express');
const app = express();
const port = 9999; // Problems but a GA ain't one

app.use(express.static(
  path.join(__dirname, 'public/')
));

/*
app.get('*', function(req, res) {
  const file = path.join(__dirname, 'public/index.html');
  res.sendFile(file);
  res.end();
});
*/

app.listen(port);
console.log(`Listening on ${port}`);