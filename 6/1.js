import fs from "fs";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");

const markers = lines
  .filter((line) => line)
  .map((line) => {
    for (let i = 4; i <= line.length; i++) {
      const last4 = line.slice(i - 4, i);
      if (new Set(last4).size === last4.length) {
        return i;
      }
    }
    return -1;
  });
console.log({ markers });
