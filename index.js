const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoute = require('./routes/product.route.js');

// middleware
app.use(express.json()); // allows JSON data in a POST
app.use(express.urlencoded({extended: false})) // allows form-encoded data in a POST

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

mongoose.connect('mongodb+srv://jalimaras:secret1819@cluster0.jyhl7j0.mongodb.net/simple-crud-app-db?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to DB!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Connection to DB failed!');
  })