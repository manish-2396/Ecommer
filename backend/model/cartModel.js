const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    img: {type: "String" , require:true},
    name: {type: "String" , require:true},
    offer: {type: "String" , require:true},
    price: {type: "String" , require:true},
    normalprice: {type: "String" , require:true},
    orderdate:{type: "String" , require:true},
    ordertime:{type: "String" , require:true},
    user_id:{type:"String"},
    quntity: {type: "Number" , default: 1}
})




const cartModel = mongoose.model("Cart" , cartSchema)


module.exports = {
    cartModel
}
