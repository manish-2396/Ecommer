const {Router} = require('express'); 
const { authtication } = require('../middleware/authtication');
const { cartModel } = require('../model/cartModel');


const cartRouter = Router();
cartRouter.post("/addCart" , async(req , res) => {
    console.log(req.body)
    try{
        const data = new cartModel(req.body)
        await data.save()
        res.status(200).send({Massage: "Add to the Cart"})
    }
    catch(error){
        res.status(501).send({Massage:"Something went wrong"})
    }
})

cartRouter.get("/getCart" ,  async(req , res) => {
    // console.log(req.body.user_id)
    try{
        const data = await cartModel.find();
        console.log(data)
        res.status(200).send({"data":data})
    }
    catch(error){
        res.status(501).send({Massage:"some went wrong"});
    }
})
module.exports = {
    cartRouter
}


