import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dec: {
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

const product = mongoose.model('product', productSchema);

export default product;
