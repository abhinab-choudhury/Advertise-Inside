import mongoose from "mongoose";

const DB_NAME = 'DB';

export default connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    // we have different server for production and developement, this line gives a better idea 
    // about the Database PORT
    console.log("connectionInstance : ", connectionInstance)
    console.log(`\nMongoDB Connected : \nDB HOST : ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("Connection ERROR : ", error)
    process.exit(1)
  }
}