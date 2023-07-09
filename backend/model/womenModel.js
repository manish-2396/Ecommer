const mongoose = require("mongoose");

const womenSchema = mongoose.Schema({
  image_url: { type: String },
  strikedprice: { type: String },
  name: { type: String },
  strikedoffprice: { type: String },
  discount: { type: String },
  price: { type: Number },
  offprice: { type: String },
  ratingimg: { type: String },
  freq: { type: String },
});

const womenModel = mongoose.model("women_data", womenSchema);

module.exports = {
  womenModel,
};
