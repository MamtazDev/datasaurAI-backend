const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

const userRoutes = require("./routes/user.routes");
const reviewsRoutes = require("./routes/reviews.routes");
const completionsRoutes = require("./routes/completion.routes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// routes
app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/completions", completionsRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
