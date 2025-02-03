import dotenv from 'dotenv';
    //use env
import express from 'express';
    //simplies api, rest, and middleware
import mongoose from 'mongoose';
    //connec the project with nodemon
import nodemon from 'nodemon';
    //live updates
import bodyParser from 'body-parser';
    //simplifies request bodies
import ejs from 'ejs';
    //allows reusable templates
import * as path from 'path';
    //allow work with files and pathings

const __filename = import.meta.filename
const __dirname = import.meta.dirname
dotenv.config();
const app = express()
app.set('view engine', 'ejs')
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
mongoose.connect(process.env.Accounturi)
const Schema = mongoose.Schema;


const PORT = 3000; 






const userSchema = new Schema ({
user: String,
email: String,
password: String

})

const Account = new mongoose.model("Account",userSchema)

    

//app.use(express.static(path.join(__dirname)));

 app.get('/', (req, res) => {
    res.render('home.ejs')  
   // res.sendFile(path.join(__dirname, import.meta.url));
    ///res.sendFile(path.join(__dirname, ""));
     //res.sendFile(path.join(__dirname, "AccountMakingPractice.css"));  
    //res.sendFile();
     console.log("Success")
 });

app.post('/fillin', (req,res) => {
const theuser = req.body.user
const theemail = req.body.email
const thepassword = req.body.password

const user1 = Account.create({
    user:theuser,
         email:theemail ,
         password:thepassword
    

})

})


 app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(__dirname)
})
     
