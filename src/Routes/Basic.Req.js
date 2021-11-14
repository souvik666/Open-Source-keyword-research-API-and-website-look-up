const express = require("express");
const AlexaRankResponse = require("../controllers/Alexa.Ranking");
const FindBrokenLink = require("../controllers/BrokenLink.Controller");
const router = express.Router();

router.get("", async (req, res) => {
  const uri = req.body.uri;
  const alexa = await AlexaRankResponse(uri);
  return res.json(alexa);
});

router.get("/brokenlinks", async (req, res) => {
  const broken = await FindBrokenLink(req.body.uri);
  res.send(broken);
});

module.exports = router;
