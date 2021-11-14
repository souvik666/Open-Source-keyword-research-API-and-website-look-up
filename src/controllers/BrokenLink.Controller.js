const link = require("linkinator");

const FormaterObj = (url, state, status, parent) => {
  return { url, state, status };
};

const FindBrokenLink = async (des) => {
  const checker = new link.LinkChecker();

  checker.on("pagestart", (url) => {
    console.log(`Scanning ${url}`);
  });

  let arr = [];
  checker.on("link", (result) => {
    arr.push(
      FormaterObj(result.url, result.state, result.status, result.parent)
    );
  });

  const result = await checker.check({
    path: `${des}`,
    // port: 8673,
    // recurse: true,
    // linksToSkip: [
    //   'https://jbeckwith.com/some/link',
    //   'http://example.com'
    // ]
  });

  const brokeLinksCount = result.links.filter((x) => x.state === "BROKEN");
  let res = {
    CheckedLinks: arr,
    BrokenkLinks: brokeLinksCount,
    BrokenLinkCount: brokeLinksCount.length
      ? brokeLinksCount.length
      : "Congratulations no broken links found",
  };
  return res;
};

module.exports = FindBrokenLink;
