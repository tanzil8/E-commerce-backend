import express from 'express';

// Import middleware and controllers


import { getProduct, postProduct } from '../controllers/product.js';
import product from '../middleware/product.js';

const router = express.Router();

// Handle POST request to upload best-selling product with image
router.post("/", product.single('img'), postProduct);

// Handle GET request to retrieve best-selling products
router.get("/", getProduct);

export default router;
