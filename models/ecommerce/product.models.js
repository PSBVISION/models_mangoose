import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String
    },
    productImage:{
      required: true,
      type: String
    },
    price:{
      type: Number,
      default: 0
    },
    stock:{
      type: Number,
      default: 0
    },
  }, {timestamps: true,});

export const Product = mongoose.model("Product", productSchema);