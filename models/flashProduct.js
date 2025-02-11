import mongoose from "mongoose";


const flashProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    
    min: 0,
  },
}, {
  timestamps: true, // this will add 'createdAt' and 'updatedAt' fields
});


const FlashProduct = mongoose.model('FlashProduct', flashProductSchema);

export default FlashProduct;