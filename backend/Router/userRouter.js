
require('dotenv').config();

const { Router } = require("express");

const userRoutes = Router();

const { userModule } = require("../model/userModel");

const jwt = require("jsonwebtoken");

userRoutes.get("/", (req, res) => {
  res.send("Well Come")
})

userRoutes.post("/signup", async (req, res) => {
  const user = await userModule.findOne({ email: req.body.email });
  if (user) {
    res.send("User already registered")
  } else {
    const userData = new userModule(req.body);

    await userData.save();

    res.send("resistance successfully completed");
  }
});

userRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModule.findOne({ email});
  if(user) {
    if(user.password === password){
       const token = jwt.sign(
      {
        userId: email,
      },
      user.gender,
      { expiresIn: "12h" }
    );
    res.json({ "Massage": "login succesfull", "token": token, "name": user.name, "gender": user.gender });
    }else{
      res.send("Please Enter Correct Password");
    }
  }
  else{
    res.send("please signup first then login")
  }
});

userRoutes.post("/removed" , async (req , res) => {

  const user = await userModule.findOne( req.body );

  if(user){
    await userModule.deleteOne(req.body)
    res.send("User Data Removed Successfully")
  }else{
    res.send("Please Enter Correct Password");
  }

})

module.exports = { userRoutes };