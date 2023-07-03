// index.js
const Mustache = require("mustache");
const fs = require("fs");
const fetch = require("node-fetch");
const MUSTACHE_MAIN_DIR = "./main.mustache";

const generateReadMe = async () => {
  const mockData = await new Promise((resolve) =>
    resolve({})
  );

  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), mockData);
    fs.writeFileSync("README.md", output);
  });
};

generateReadMe();
