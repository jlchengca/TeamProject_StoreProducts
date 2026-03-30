const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_URI || 'mongodb://localhost/testdb';
    await mongoose.connect(dbURI);
    console.log('Mongoose connected to ' + dbURI);
  } catch (err) {
    console.error('Mongoose connection error:', err.message);
    throw err;
  }
};

module.exports = connectDB;