import { Account } from "../models/User.js"
import LoggedIn from "../app.js"


const newAccount = (req, res) => {
   LoggedIn = true;

    const theuser = req.body.userregister
    const thepassword = req.body.passwordregister;
    const theemail = req.body.emailregister;
  
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



  res.redirect('/')
}
  


  function validatemail(theemail) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(theemail);
    }

export default newAccount;