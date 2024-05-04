import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
    // we have different server for production and developement, this line gives a better idea 
    // about the Database PORT
    console.log(`\nMongoDB Connected : \nDB HOST : ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("Connection ERROR : ", error)
    process.exit(1)
  }
}