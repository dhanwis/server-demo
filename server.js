const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./model');

require('dotenv').config()

const app = express();

// Middleware configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

app.get('/', (req, res) => {
  res.send(process.env.PORT)
});

app.post("/auth/login", function(req, res) {
  const { email, password } = req.body;

  console.log(req.body);

  let newUser = new User({ email: email, password: password });

  newUser.save()
    .then(savedUser => {
      console.log("User saved:", savedUser);
      res.status(200).json({ message: "User created successfully", user: savedUser });
    })
    .catch(err => {
      console.error("Error saving user:", err);
      res.status(500).json({ error: "Failed to create user" });
    });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
