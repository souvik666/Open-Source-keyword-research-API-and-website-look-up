require("dotenv").config();
const { marked } = require("marked");
const fs = require("fs");
const express = require("express");
const AmazonRouter = require("./src/controllers/Amazon.keyword.Controller");
const app = express();
const port = process.env.PORT;
const AlexaController = require("./src/controllers/Alexa.Controller");
const BrokenLinkRouter = require("./src/controllers/BrokenLink.Controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/amazon", AmazonRouter);
app.use("/brokenlink", BrokenLinkRouter);
app.use("/alexarank", AlexaController);

app.get("/", function (req, res) {
  var path = __dirname + "/docs/doc.md";
  var file = fs.readFileSync(path, "utf8");
  res.send(marked(file.toString()));
});

app.listen(port, async (req, res) => {
  console.log("server is up");
});
