const mongoose = require('mongoose');


const otpSchema = mongoose.Schema({
    email:{type: String , required : true},
    code:{type: String , required :true},
    expireIn:{type: Number , require : true}
})

const otpModule = mongoose.model("opt" , otpSchema);

module.exports = {
    otpModule
}