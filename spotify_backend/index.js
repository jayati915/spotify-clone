//npm init : package.json
//npm i express: expressJs package installed

const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const port = 8000;

//connect mongodb
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PASSWORD +
      "@cluster0.ildcugb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.log("Error in connecting to MongoDB");
  });

app.listen(port, () => {
  console.log("Running on port " + port);
});
