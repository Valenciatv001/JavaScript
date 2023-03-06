const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the template engine
app.set('view engine', 'ejs');

// Set up the routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Check if the username and password are correct
  if (username === 'Admin' && password === 'password') {
    res.send('Logged in!');
  } else {
    res.send('Invalid username or password');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
