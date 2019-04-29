var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3001;
var users = [];

function isUser(username, password) {
  for (i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      return true;
    }
  }
  return false;
}

app.post('/login', (req, res) => {
  console.log('/login called');
  if (isUser(req.body.username, req.body.password)) {
    res.send("Success");
    return;
  }
  res.send("Failure");
});

app.post('/register', (req, res) => {
  console.log("password: " + req.body.password);
  // if (isUser(req.body.email, req.body.password)) {
  //   res.status(400).send(`"Already Exist!"`);
  //   return;
  // }
  // console.log('h');
  // if (req.body.confirmPassword != req.body.password) {
  //   res.status(400).send("Password and confirm password don't match!");
  //   return;
  // }
  // user = {username: req.body.username, email: req.body.email,
  //   password: req.body.password};
  // users.push(user);
  res.sendStatus(200).send("f");
});

app.get('/', (req, res) => {
  console.log('/ called');
  res.sendStatus(200).send('Success');
});

app.listen(port, () => console.log(`Server started on ${port}`));
