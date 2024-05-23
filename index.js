const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const app = express();
app.use(express.json()); // allows JSON in a POST request

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

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.post('/api/products', async (req, res) => {
try {
  const product = await Product.create(req.body);
  res.status(200).json(product);
} catch (error) {
  res.status(500).json({message: error.message});
}
});