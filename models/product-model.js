const mongoose = require("mongoose");

const productModel = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  productImage: { type: String },
});

// Export Product model
module.exports = mongoose.model("Product", productModel);
