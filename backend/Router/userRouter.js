
require('dotenv').config();

const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt");

const { Router, response } = require("express");

const userRoutes = Router();

const { userModule } = require("../model/userModel");

const jwt = require("jsonwebtoken");
const { otpModule } = require('../model/OtpModel');

userRoutes.get("/", (req, res) => {
  res.send("Well Come")
})


userRoutes.post("/newaccount", async (req, res) => {
  const user = await userModule.findOne(req.body);
  if (user) {
    res.status(200).send({ isAuth: false, Massage: "User already registered" })
  } else {
    let otpcode = Math.floor(Math.random() * 1000 + 4500);
    let expireIn = new Date().getTime() + 180 * 1000;
    let otpData = new otpModule({
      email: req.body.email,
      code: otpcode,
      expireIn: expireIn
    })
    mailer(req.body.email, otpcode)
    await otpData.save();
    res.status(200).send({ isAuth: true , Massage:"checkotp" })
  }
})

userRoutes.post("/checkotp", async (req, res) => {

  let data = await otpModule.findOne(req.body);
  if (data) {

    const expireIn = data.expireIn
    const currentTime = new Date().getTime();

    if(expireIn >= currentTime){
      await otpModule.deleteOne(req.body);
    res.status(200).send({ isAuth: true , Massage: "move to signup"})
    }else{
      res.status(408).send({ isAuth: false ,  Massage: "OTP is Expired!" })
    }    
  } else {
    res.status(200).send({ isAuth: false, Massage: "Please Enter Correct OTP!" })
  }
})


userRoutes.post("/signup", async (req, res) => {
  // console.log(req.body)

  try {
    const { email, password, name, gender, age, } = req.body;
    bcrypt.hash(password, 4, async function (err, hash) {
      const userData = new userModule({ name, email, password: hash, age, gender });
      await userData.save();
      res.status(200).send({ Massage: "resistance successfully completed" });
    });
  }
  catch (error) {
    console.log(error);
    res.status(401).send({ "Massage": "Something went wrong" })
  }

});



userRoutes.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModule.findOne({ email });
    if (user) {
      const hash = user.password;
      bcrypt.compare(password, hash, function (err, result) {
        if (err) {
          res.status(501).send({ Massage: "plz login" });
        }
        if (result) {
          const token = jwt.sign(
            {
              userId: user._id,
            },
            process.env.Code,
            { expiresIn: "6h" }
          );
          res.status(200).send({ isAuth:true, Massage: "login succesfull", token: token, name: user.name, gender: user.gender, age: user.age , email:email });
        }
      });
    }
    else {
      res.status(200).send({ Massage: "please signup first then login" })
    }
  }
  catch (error) {
    console.log(error)
    res.status(401).send({ Massage: "Something went wrong" })
  }

});

userRoutes.post("/removed", async (req, res) => {

  const user = await userModule.findOne(req.body);
  if (user) {
    await userModule.deleteOne(req.body)
    res.send({ Massage: "User Data Removed Successfully" })
  } else {
    res.send({ Massage: "Please Enter Correct Password" });
  }

})

userRoutes.post("/passwordrest", async (req, res) => {

  const user = await userModule.findOne(req.body);

  if (user) {
    let otpcode = Math.floor(Math.random() * 1000 + 4500);
    let expireIn = new Date().getTime() + 180 * 1000;

    const payload = {
      email: req.body.email,
      code: otpcode,
      expireIn: expireIn
    }
    let otpData = new otpModule(payload)
    mailer(req.body.email, otpcode)
    await otpData.save();

    res.status(200).send({ Massage: "Please Check your Email" })
  } else {
    res.status(403).send({ Massage: "Email not found" })
  }
})

userRoutes.post("/changePassword", async (req, res) => {
  const { email, code, password } = req.body
  const data = await otpModule.findOne({ email, code });

  console.log(email , code , password)


  if (data) {
    const expireIn = data.expireIn
    const currentTime = new Date().getTime();
    console.log(expireIn - currentTime)

    if (expireIn >= currentTime) {
      bcrypt.hash(password, 4, async function (err, hash) {
        const userData = await userModule.findOne({ email });
        userData.password = hash;
        await userData.save();
        res.status(200).send({isAuth:true ,  Massage: "Password updated sucessfully!" })
      });
      await otpModule.deleteOne({ email, code });
    } else {
      res.status(408).send({ isAuth: false , Massage: "OTP is Expired!" })
    }
  }
  else {
    res.status(403).send({ isAuth:false , Massage: "Please enter Correct OTP" })
  }
})


const mailer = (email, otp) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAILER_POASSWORD
    }
  });

  var mailOptions = {
    from: process.env.MAIL_I,
    to: email,
    subject: 'rest your password one time password',
    text: `this a one time password is ${otp} and valid for only next 3 minutes `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}




module.exports = { userRoutes };