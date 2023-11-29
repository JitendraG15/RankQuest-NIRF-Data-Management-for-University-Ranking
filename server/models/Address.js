const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  entityID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  houseNoOrStreetAddress: {
    typpe: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
});



module.exports = mongoose.model("Address", addressSchema);