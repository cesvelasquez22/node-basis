const { createFile } = require("./helpers/multiple");
const argv = require("./config/yargs");

require('colors');

console.clear();

// It is not reommended to use because cause many case use problems.
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);

createFile(argv.base, argv.result, argv.limit)
  .then((result) => {
    console.log(`Result: ${result.rainbow} created`);
  })
  .catch((error) => {
    console.log(error);
  });
