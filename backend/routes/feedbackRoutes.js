const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// POST: Submit feedback
// router.post("/", async (req, res) => {
//   try {
//     const newFeedback = new Feedback(req.body);
//     await newFeedback.save();
//     res.status(201).json({ message: "Thanks for your feedback!" });
//   } catch (err) {
//     res.status(500).json({ error: "Something went wrong." });
//   }
// });

router.post("/", async (req, res) => {
  console.log("post api");
  try {
    console.log("Received data:", req.body);  // 👈 Add this
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ message: "Thanks for your feedback!" });
  } catch (err) {
    console.error("Error saving feedback:", err);  // 👈 Add this
    res.status(500).json({ error: "Something went wrong." });
  }
});// GET: Get all feedback
router.get("/", async (req, res) => {
  try {
    const { category, sortBy } = req.query;
    let filter = category ? { category } : {};
    let sort = sortBy ? { [sortBy]: 1 } : { createdAt: -1 };

    const feedbacks = await Feedback.find(filter).sort(sort);
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch feedback." });
  }
});

module.exports = router;
