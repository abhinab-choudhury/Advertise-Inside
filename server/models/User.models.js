import mongoose from 'mongoose'

export default UserSchema = mongoose.Schema({
  company_name: {
    type: String,
    require: true
  },
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  phone_no: {
    type: Number,
    require: true,
    max: 10
  },
  password: {
    type: String,
    min: 8,
    require: true
  },
  company_address: {
    type: String,
    require: tru,
  },
  delivery_address: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: 'user',
  }
}, { timestamps: true })

export const User = mongoose.model("User", UserSchema);