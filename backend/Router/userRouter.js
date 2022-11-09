
require('dotenv').config();

const { Router } = require("express");

const userRoutes = Router();

const { userModule } = require("../model/userModel");

const jwt = require("jsonwebtoken");

userRoutes.get("/", (req, res) => {
  res.send("Well Come")
})

userRoutes.post("/signup", async (req, res) => {

  try {
    const user = await userModule.findOne({ email: req.body.email });
    if (user) {
      res.status(200).send({ "Massage": "User already registered" })
    } else {
      const userData = new userModule(req.body);

      await userData.save();

      res.status(200).send("resistance successfully completed");
    }
  }
  catch (error) {
    res.status(501).send({ "Massage": "Something went wrong" })
  }

});



userRoutes.post("/login", async (req, res) => {

  try{
    const { email, password } = req.body;
    const user = await userModule.findOne({ email });
    if (user) {
      if (user.password == password) {
        console.log(password)
        const token = jwt.sign(
          {
            userId:user._id,
          },
          process.env.Code,
          { expiresIn: "12h" }
        );
        res.status(200).send({ Massage: "login succesfull", token: token, name: user.name, gender: user.gender });
      } else {
        res.status(500).send({ Massage: "Something went wrong. Please try again later." });
      }
    }
    
    else {
      res.send({ Massage: "please signup first then login" })
    }
  }

  catch (error) {
    res.status(501).send({Massage: "Something went wrong"})
  }

});

userRoutes.post("/removed", async (req, res) => {

  const user = await userModule.findOne(req.body);

  if (user) {
    await userModule.deleteOne(req.body)
    res.send("User Data Removed Successfully")
  } else {
    res.send("Please Enter Correct Password");
  }

})

module.exports = { userRoutes };