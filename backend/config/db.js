require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () =>
{
  try
  {
    await mongoose.connect(
      "mongodb+srv://osama:gqyZDuZSfC99x0Qx@cluster0.38doghy.mongodb.net",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )

    console.log('MongoDB connection SUCCESS')
  } catch (error)
  {
    console.error('MongoDB connection FAIL')
    process.exit(1)
  }
}

module.exports = { connectDB }
