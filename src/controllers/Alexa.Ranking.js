const AlexaRank = require("alexa-rank-nodejs").default;

const AlexaRankResponse = async (uri) => {
  try {
    const response = await AlexaRank.siteinfo(uri);
    return response;
  } catch (error) {
    console.error(error);
  }
};

module.exports = AlexaRankResponse;
