//import express from "app"
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
mongoose.connect(process.env.Accounturi);



export const Schema = mongoose.Schema;



 const userSchema = new Schema({
  user: String,
  email: String,
  password: String,
});

export const Account = new mongoose.model("Account", userSchema);




// import dotenv from 'dotenv';
// import express from 'express';
// import mongoose from 'mongoose';

// dotenv.config();
// console.log(process.env.MONGODB_URI)
// const app = express()
// mongoose.connect(process.env.MONGODB_URI)
// const Schema = mongoose.Schema;
