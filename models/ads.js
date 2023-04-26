const mongoose = require("mongoose");

const AdsSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    require: true,
  },
  redirectUrl: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
});

module.exports = Ads = mongoose.model("ads", AdsSchema);
