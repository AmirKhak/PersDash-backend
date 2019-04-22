var express = require('express');
var app = express();
const port = 3001;
var users = [];
var params = {};

app.post('/login', (req, res) => {
  const mem = [{}, {}];
  res.send(mem);
});

app.get('/', (req, res) => {
  const mem = [{}, {}];
  res.json(mem);
});

app.listen(port, () => console.log(`Server started on ${port}`));
