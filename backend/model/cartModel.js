const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    img: {type: "String" , require:true},
    name: {type: "String" , require:true},
    offer: {type: "String" , require:true},
    price: {type: "String" , require:true},
    normalprice: {type: "String" , require:true},
    user_id:{type:"String"}
})




const cartModel = mongoose.model("Cart" , cartSchema)


module.exports = {
    cartModel
}
