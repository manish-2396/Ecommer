const {Router} = require('express'); 
const { authtication } = require('../middleware/authtication');
const { cartModel } = require('../model/cartModel');


const cartRouter = Router();
cartRouter.post("/addCart" , async(req , res) => {
    console.log("yfh")
    try{
        const {image_url , price ,offer , user_id} = req.body;
        const data = new cartModel({image_url , price ,offer , user_id})
        await data.save()
        res.status(200).send({Massage: "Add to the Cart"})
    }
    catch(error){
        res.status(501).send({Massage:"Something went wrong"})
    }
})

cartRouter.get("/getCart" ,  async(req , res) => {
    console.log(req.body.user_id)
    try{
        const data = await cartModel.find({user_id:req.body.user_id});
        res.status(200).send({data:data})
    }
    catch(error){
        res.status(501).send({Massage:"some went wrong"});
    }
})
module.exports = {
    cartRouter
}


