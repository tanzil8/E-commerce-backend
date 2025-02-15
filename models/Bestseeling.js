import mongoose from "mongoose";

const bestSellingSchema = new mongoose.Schema({
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

const BestSellingProduct = mongoose.model('BestSellingProduct', bestSellingSchema);

export default BestSellingProduct;
