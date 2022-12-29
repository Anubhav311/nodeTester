const bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");
require("dotenv").config(); // For environment variables
const app = express();
const port = process.env.PORT || 8000; //Important because heroku provides its own port

app.use(cors());
app.use(express.static("static"));


app.use(bodyParser.json());


app.get("/", function (req, res) {
  console.log('this is a test message')
  res.send("Bazinga");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
