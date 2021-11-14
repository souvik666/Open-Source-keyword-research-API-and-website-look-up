const FindBrokenLink = require("../../utilis/BrokenLink.Controller");
const express = require("express");
const BrokenLinkRouter = express.Router();

BrokenLinkRouter.get("/brokenlinks", async (req, res) => {
  if (!req.body.uri) return res.send({ err: "no uri provided" });
  const broken = await FindBrokenLink(req.body.uri);
  return res.send(broken);
});

module.exports = BrokenLinkRouter;
