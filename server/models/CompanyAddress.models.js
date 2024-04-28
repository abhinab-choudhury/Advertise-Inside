import mongoose, { model, models } from "mongoose";

const CompanyAddressSchema = new mongoose.Schema({
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

export const CompanyAddress = new mongoose.model("CompanyAddress", CompanyAddressSchema)