const mongoose = require("mongoose");

const kidsSchema = mongoose.Schema({
  image_url: { type: String },
  name: { type: String},
  strikedoffprice : {type: String},
  discount : {type: String},
  strikedprice: { type: String },
  price: { type: Number },
  offer: { type: String },
  rating: { type: String },
  freq: { type: String },
});

const kidsModel = mongoose.model("kids_data", kidsSchema);

module.exports = {
  kidsModel,
};
