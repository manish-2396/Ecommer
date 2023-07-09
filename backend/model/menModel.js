const mongoose = require("mongoose");

const menSchema = mongoose.Schema({
  image_url: { type: String },
  name: { type: String},
  strikedoffprice : {type: String , require : true},
  discount : {type: String},
  strikedprice: { type: String },
  price: { type: Number },
  offer: { type: String },
  rating: { type: String },
  freq: { type: String },
});

const menModel = mongoose.model("men_data", menSchema);

module.exports = {
  menModel,
};
