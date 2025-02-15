import express from 'express';

// Import middleware and controllers
import BestSeeling from '../middleware/BestSeeling.js';
import { getBestSeeling, postBestSeeling } from '../controllers/BestSeeling.js';

const router = express.Router();

// Handle POST request to upload best-selling product with image
router.post("/", BestSeeling.single('img'), postBestSeeling);

// Handle GET request to retrieve best-selling products
router.get("/", getBestSeeling);

export default router;
