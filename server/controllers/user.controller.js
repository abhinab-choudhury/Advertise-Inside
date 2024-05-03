import mongoose from "mongoose"
import jswt from 'jsonwebtoken'
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/User.models.js"

const registerUser = async (req, res) => {
  const { company_name, first_name, last_name, phone_no, email, password, } = req.body
} 
