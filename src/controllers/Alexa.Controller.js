const express = require("express");
const AlexaRankResponse = require("../../utilis/Alexa.Ranking");
const router = express.Router();

router.get("/", async (req, res) => {
  const uri = req.body.uri;
  const alexa = await AlexaRankResponse(uri);
  return res.json(alexa);
});

module.exports = router;
