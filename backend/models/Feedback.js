const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  category: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
