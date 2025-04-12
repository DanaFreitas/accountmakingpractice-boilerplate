import dotenv from "dotenv";
import express from "express";
//import mongoose from "mongoose";
import nodemon from "nodemon";
import bodyParser from "body-parser";
import ejs from "ejs";
import * as path from "path";
//import { v4 as uuidv4 } from 'uuid';
//import nodemailer from "nodemailer";
import PORT from "./config/port.js" 
import newAccount from "./controllers/newAccount.js";
import loginToAccount from "./controllers/loginToAccount.js";
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "views")));
//mongoose.connect(process.env.Accounturi);
export let LoggedIn = false;



  




if (typeof window !== 'undefined') {
let NavbarButton = document.querySelectorAll('[data-button="NavbarItem"]');
}


app.get("/", (req, res) => {
  res.render("home.ejs");
  });


app.get("/Login", (req, res) => {
    res.render("Login.ejs")
  });


app.get("/RegisterAccount", (req, res) => {
    res.render("RegisterAccount.ejs")
  });





  app.get("/registeraction", (req,res) => {
    res.render("LoggedIn.ejs")
  })
app.post("/registeraction", newAccount);


app.post("/loginaction", loginToAccount);





app.get("/Logoff", (req,res) => {
  res.render("/"), logout
})




app.listen(PORT, () => {
  console.log(__dirname);
});


