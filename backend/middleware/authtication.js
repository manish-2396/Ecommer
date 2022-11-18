
const jwt = require('jsonwebtoken')
// console.log(process.env.Code)

const authtication = (req , res , next) => {
    // console.log("manish" , req.headers.authorization)
    if(!req.headers.authorization){
        res.status(500).send({massage:"User not authorized 1"})
    }else{
        console.log("manish")
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token , process.env.Code , (err , decoded) => {
            if(err){
                res.status(501).send({massage:"User not authorized"})
            }else{
                // console.log(decoded.userId)
                req.body.user_id = decoded.userId;
                next();
            }
        })

    }
}

module.exports = {
    authtication
}