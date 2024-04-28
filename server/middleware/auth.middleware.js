import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from '../models/User.models.js'

export const verifyJWT = async (req, res) => {
  try {

  } catch (error) {
    res.status(error.status || 500).json()
  }
}
