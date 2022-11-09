const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    image_url:{type : 'String' , require:  true},
    price:{type : "String" , require: true},
    offer:{type : "String" , default: "0"},
    user_id:{type:"String"}

})




const cartModel = mongoose.model("Cart" , cartSchema)


module.exports = {
    cartModel
}
