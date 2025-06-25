// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Import routes
// const feedbackRoutes = require("./routes/feedbackRoutes");
// app.use("/feedback", feedbackRoutes);
// console.log("MONGO_URI:", process.env.MONGO_URI);

// // Connect to MongoDB and start server
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(5000, () => console.log("Server running on http://localhost:5000"));
//   })
//   .catch((err) => console.error(err));
const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();


// ✅ CORS must be used before routes
app.use(cors({
  origin: "http://localhost:3000", // your frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
const feedbackRoutes = require("./routes/feedbackRoutes");
app.use("/feedback", feedbackRoutes);

// MongoDB + server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    //app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(err => console.error(err));

