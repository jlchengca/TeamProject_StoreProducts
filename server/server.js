const express = require('express');
const cors = require('cors');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config();

const connectDB = require('../models/db');
const Product = require('../models/products');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => res.send('API running'));

app.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const myProductsRaw = await Product.find();

    const member1Url = 'https://team-project-e-commerce--tiagophilippefe.replit.app/store/69becb00e3e49ae440f51722/';
    const member2Url = 'https://cst8326-teamproject-api-mariama.onrender.com/products/getAll';

    const member1Response = await fetch(member1Url);
    const member1Data = await member1Response.json();

    const member2Response = await fetch(member2Url);
    const member2Data = await member2Response.json();

    const member1ProductsRaw = Array.isArray(member1Data)
      ? member1Data
      : member1Data.products || [];

    const member2ProductsRaw = Array.isArray(member2Data)
      ? member2Data
      : [];

    const myProducts = myProductsRaw.map(product => ({
      source: 'self',
      ...product._doc
    }));

    const member1Products = member1ProductsRaw.map(product => ({
      source: 'member1',
      storeName: member1Data.storeName || 'Member1 Store',
      ...product
    }));

    const member2Products = member2ProductsRaw.map(product => ({
      source: 'member2',
      ...product
    }));

    const allProducts = [
      ...myProducts,
      ...member1Products,
      ...member2Products
    ];

    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).json({
      error: 'Failed to integrate team member modules',
      details: err.message
    });
  }
});

app.get('/products/:productId', async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.productId });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/products/:productId', async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { productId: req.params.productId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/products/:productId', async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      productId: req.params.productId
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Server failed to start:', err.message);
  }
};

startServer();