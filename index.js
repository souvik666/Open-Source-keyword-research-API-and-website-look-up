require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const UserReqController = require("./src/Routes/Basic.Req");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", UserReqController);

app.listen(port, async (req, res) => {
  console.log("server is up");
});
