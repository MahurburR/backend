// require("dotenv").config();
const express = require("express");
// const productRoutes = require("./routes/productRoutes");
// const userRoutes = require("./routes/userRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const { connectDB } = require("./config/db");
// const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

// app.use("/api/products", productRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/cart", cartRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// connectDB();
module.exports = app
