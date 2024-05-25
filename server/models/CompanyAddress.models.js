import mongoose, { model, models } from "mongoose";

const CompanyAddressSchema = new mongoose.Schema({
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

export const CompanyAddress = new mongoose.model("CompanyAddress", CompanyAddressSchema)