import mongoose from "mongoose";

const DeliveryAddressSchema = new mongoose.Schema({
  street_address: {
    type: String,
    require: true,
    trim: true
  },
  city: {
    type: String,
    require: true,
    trim: true
  },
  zipcode: {
    type: Number,
    length: 6,
    require: true
  }
}, {
  timestamps: true
})

export const DeliveryAddress = new mongoose.model("DeliveryAddress", DeliveryAddressSchema)