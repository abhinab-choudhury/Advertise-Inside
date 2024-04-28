import mongoose from "mongoose";

const DeliveryAddressSchema = new mongoose.Schema({
  state: {
    type: String,
    require: true,
    trim: true
  },
  district: {
    type: String,
    require: true,
    trim: true
  },
  zipcode: {
    type: Number,
    length: 6,
    require: true
  },
  address: {
    type: String,
    require: true,
    trim: true
  }

}, {
  timestamps: true
})

export const DeliveryAddress = new mongoose.model("DeliveryAddress", DeliveryAddressSchema)