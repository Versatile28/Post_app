const express = require("express");
const { connectDB } = require("./config/db");
require("dotenv").config();
const router = require("./router/postRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("hello from nodejs.");
});

app.listen(process.env.PORT, () => {
  console.log("server started successfully");
  connectDB();
});
