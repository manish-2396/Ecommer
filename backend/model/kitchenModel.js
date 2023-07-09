const mongoose = require("mongoose");

const kitchenSchema = mongoose.Schema({
  image_url: { type: String },
  name: { type: String},
  strikedOffPrice : {type: String , require : true},
  discount : {type: String},
  strikedprice: { type: String },
  price: { type: Number },
  offer: { type: String },
  rating: { type: String },
  freq: { type: String },
});

const kitchenModel = mongoose.model("kitchen_data", kitchenSchema);

module.exports = {
  kitchenModel,
};
