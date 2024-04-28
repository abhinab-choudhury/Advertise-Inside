import dotenv from 'dotenv'
dotenv.config({ path: './env' })

import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import cors from "cors"
import connectDB from './db/index.js'
import appRouter from './routes/index.js'


const app = express()

connectDB()
  .then(() => {

    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    })

    app.use(express.json())
    app.use(cors({
      origin: process.env.ORIGIN,
      credentials: true
    }));
    app.use(express.urlencoded({
      extended: true,
    }))
    app.use(express.static("public"))
    app.use(cookieParser())
    app.use('/api', appRouter)

  })
  .catch((error) => {
    console.log('MongoDB Connection ERROR : ', error)
  })



