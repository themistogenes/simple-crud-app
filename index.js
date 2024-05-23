const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://jalimaras:secret1819@cluster0.jyhl7j0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to DB!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Connection to DB failed!');
  })

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});