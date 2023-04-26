const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
  amnt: {
    type: Number,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  dueDate: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  fromUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
  toUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  }
});

module.exports = Feed = mongoose.model("feed", FeedSchema);
