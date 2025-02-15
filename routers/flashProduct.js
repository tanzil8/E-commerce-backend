import express from 'express';
import { getFlashProduct, postFlashProduct } from '../controllers/flashProduct.js';  // Your controller
import FlashProduct from '../middleware/flashproduct.js';  // Middleware for handling file upload

const router = express.Router();

// Apply the upload middleware (single file upload) and then the handler
router.post("/", FlashProduct.single('img'), postFlashProduct);
router.get("/",  getFlashProduct);

export default router;

