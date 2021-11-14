const { GrabKeywords } = require("amazon-keyword-research");
const express = require("express");
const AmazonRouter = express.Router();

AmazonRouter.get("/", async (req, res) => {
  const phrase = req.body.phrase;
  const count = req.body.count;
  const arr = [];
  const options = {
    keyword: phrase,
    limit: count || 10,
  };
  let amazon = new GrabKeywords(options)._initScraper();
  amazon.on("keywords", (key) => {
    arr.push(key);
    if (arr.length === count) {
      return res.send(arr);
    }
  });
});

module.exports = AmazonRouter;
