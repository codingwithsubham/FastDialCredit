const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
  amnt: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
});

module.exports = Feed = mongoose.model("feed", FeedSchema);
