import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import flashProduct from './routers/flashProduct.js';
import bestSeelingRouter from './routers/BestSeeling.js';
import product from './routers/product.js';



// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.use('/api/flash', flashProduct)
app.use('/api/seeling', bestSeelingRouter);
app.use('/api/product', product);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });