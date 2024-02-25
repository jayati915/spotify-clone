//npm init : package.json
//npm i express: expressJs package installed

const express = require("express");
const app = express();

const port = 8000;

app.listen(port, () => {
  console.log("Running on port " + port);
});
