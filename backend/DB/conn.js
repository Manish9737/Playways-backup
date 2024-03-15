const mongoose = require('mongoose');
require("dotenv").config()
// const { app, analytics } = require("../DB/firebase");
const DB = process.env.DATABASE;


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log(`Connected to mongoDb server !`)
  } catch (error) {
    console.log(`Error in MongoDB ${error}. !!!`)
  }
}

connectDB();