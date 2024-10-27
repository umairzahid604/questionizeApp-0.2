import mongoose from 'mongoose'

async function connectToDatabase() {
  if (mongoose.connection.readyState !== 0) return
  
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log(`Connected to MongoDB: ${conn.connection.host}`)
}

export default connectToDatabase()
