import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export default UserSchema = Schema({
  company_name: {
    type: String,
    require: true,
    trim: true,
    index: true
  },

  first_name: {
    type: String,
    trim: true,
    require: true,
  },

  last_name: {
    type: String,
    trim: true,
    require: true
  },

  phone_no: {
    type: Number,
    require: true,
    max: 10
  },

  email: {
    type: String,
    require: [true, 'Email is Required'],
    lowercase: true,
    trim: true,
    unique: true
  },

  password: {
    type: String,
    require: [true, 'Password is Required']
  },

  company_address: [
    {
      type: Schema.Types.ObjectId,
      ref: 'company_address'
    }
  ],
  delivery_address: [
    {
      type: Schema.Types.ObjectId,
      ref: 'delivery_address'
    }
  ],

  role: {
    type: String,
    default: 'user',
  },

  dispatched: {
    type: Boolean,
    default: false
  },

  plan: {
    type: String,
    default: "Unknown",
    require: true
  },

  refreshToken: {
    type: String
  }
}, { timestamps: true })

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()

  this.password = bcrypt.hash(this.password, 10)
  next()
})

// custome methods
UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

// Access Token and Refresh Token are both are JWT Token but have different use case
UserSchema.methods.generateAccessToken = function () {
  jwt.sign(
    {
      _id: this._id,
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )

}
UserSchema.methods.generateRefreshToken = function () {

}

export const User = mongoose.model("User", UserSchema);