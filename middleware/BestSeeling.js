import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import 'dotenv/config';

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_NAME, 
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_KEY_SECRET
});

// Function to extract the file format dynamically
const getFileFormat = (file) => {
  const ext = file.originalname.split('.').pop(); // Get the file extension
  return ext;  // Return the file extension (like 'png', 'jpg', 'jpeg', etc.)
}

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Cloudinary folder name
    format: async (req, file) => getFileFormat(file), // Dynamically extract the file format
    public_id: (req, file) => `${file.originalname.split('.')[0]}_${Date.now()}`, // Unique public ID (original name + timestamp)
  }
});

// Configure multer to use CloudinaryStorage
const bestseelings = multer({ storage: storage });

export default bestseelings;
