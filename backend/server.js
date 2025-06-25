

const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();



app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());


const feedbackRoutes = require("./routes/feedbackRoutes");
app.use("/feedback", feedbackRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(err => console.error(err));

