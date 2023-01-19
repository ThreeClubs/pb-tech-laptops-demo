require("dotenv").config();
console.log(process.env.TEST); // verify .env working ( DEL later )

const cors = require("cors");
const express = require("express");
const recordRoutes = express.Router();
// const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
// const routes = require("./routes/routes");

// express app
const app = express();

// middleware
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  // this will log out requests
  console.log(req.path, req.method);
  next();
});

// endpoint test

const port = process.env.PORT || 4002;

app.get("/", (req, res) => {
  res.send("Hello, Frontend. I'm Backend. Nice to meet you!");
});

app.listen(port, () => {
  console.log("Server listening for requests on port", port);
});
