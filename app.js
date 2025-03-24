import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import nodemon from "nodemon";
import bodyParser from "body-parser";
import ejs from "ejs";
import * as path from "path";
import { v4 as uuidv4 } from 'uuid';
import nodemailer from "nodemailer";
  




const __filename = import.meta.filename;
const __dirname = import.meta.dirname;





dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "views")));

mongoose.connect(process.env.Accounturi);
const Schema = mongoose.Schema;







export const PORT = 3000;





if (typeof window !== 'undefined') {

  let NavbarButton = document.querySelectorAll('[data-button="NavbarItem"]');
console.log(NavbarButton)
// let NavbarArray = Array.from(NavbarButton);
//  console.log(NavbarArray)

// for (let l = 0; l < NavbarButton.length; l++) {
//    NavbarButton[l].addEventListener("click", (evt) => {
//      let thehref = NavbarArray[l].getAttribute("href");
//      console.log(thehref)
//      contain.push(thehref);
//      NavbarArray[l].addEventListener("click", (evt) => {
//        let thehref = NavbarButton[l].getAttribute("href");
//        contain.push(thehref);
//        let hrefslice = thehref.slice(1);
//        window.location.href = `${hrefslice}.html`;
//        contain = [];
//      });
//    });
//  }
}

const userSchema = new Schema({
  user: String,
  email: String,
  password: String,
});

const Account = new mongoose.model("Account", userSchema);

app.get("/", (req, res) => {
  res.render("home.ejs");
  
});




//if (typeof window !== 'undefined') {
  app.get("/Login", (req, res) => {
    console.log("LoginTest")
    res.render("Login.ejs")
  });

  app.get("/RegisterAccount", (req, res) => {
    console.log("RegisterTest")
    res.render("RegisterAccount.ejs")
  });



//}
function validatemail(theemail) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(theemail);
}


app.post("/register", (req, res) => {
  const theuser = req.body.userregister;
  const theemail = req.body.emailregister;
  const thepassword = req.body.passwordregister;

validatemail()
if (validatemail(theemail)) {
  console.log("Success");
}
else{
  console.log("Failure");
}


  const user1 = Account.create({
    user: theuser,
    email: theemail,
    password: thepassword,
  });
});





app.listen(PORT, () => {
  console.log(__dirname);
});


