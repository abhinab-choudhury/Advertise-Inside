import Express from 'express'
import dotenv from 'dotenv'
import appRouter from './routes/index.js'

const app = Express()
dotenv.config()

app.use(Express.json())
app.use('/api', appRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`)
})
