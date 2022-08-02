const fs = require("fs");
const colors = require('colors');

// Solution 1
// const createFile = (base = 5) => {
//     return new Promise((resolve, reject) => {
//       console.log("-----------------------------------------");
//       console.log(`Multiples of ${base}`);
//       console.log("-----------------------------------------");

//       let result = "";
//       for (let index = 1; index <= 10; index++) {
//         result += `${base} x ${index} = ${base * index}\n`;
//       }

//       console.log(result);

//       fs.writeFileSync(`multiples-of-${base}.txt`, result);

//       resolve(`multiples-of-${base}.txt`);
//     });
//   };

const isNumber = (value) => {
  return new Promise((resolve, reject) => {
    if (isNaN(value)) {
      reject(`${value} is not a number`);
    } else {
      resolve(value);
    }
  });
};

const createFile = async (base = 5, list = false, limit = 10) => {
  try {
    const baseNumber = await isNumber(base);

    let result = "";
    for (let index = 1; index <= limit; index++) {
      result += `${baseNumber} x ${index} = ${baseNumber * index}\n`;
    }

    if (list) {
      console.log("-----------------------------------------");
      console.log(`Multiples of ${baseNumber}`);
      console.log("-----------------------------------------");
      console.log(result);
    }

    fs.writeFileSync(`./results/multiples-of-${baseNumber}.txt`, result);

    return `multiples-of-${baseNumber}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
