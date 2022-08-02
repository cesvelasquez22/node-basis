const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base to multiple",
  })
  .option("r", {
    alias: "result",
    type: "boolean",
    default: false,
    describe: "Show result",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Limit of multiples",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "base must be a number";
    }
    return true;
  }).argv;

module.exports = argv;
