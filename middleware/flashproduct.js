import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import 'dotenv/config';

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_NAME, 
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_KEY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    format: async (req, file) => 'png', // Extract the file format (e.g., 'png', 'jpg')
    public_id: (req, file) => file.originalname.split('.')[0] + '' // Use original name for public ID
  }
});

// Configure multer to use CloudinaryStorage
const FlashProduct = multer({ storage: storage });

export default FlashProduct;
