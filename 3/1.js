import fs from "fs";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");

const PRIORITY_LOOKUP = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let sum = 0;
for (const line of lines) {
  const length = line.length;
  if (length && length % 2 === 0) {
    const comp1 = line.slice(0, length / 2);
    const comp2 = line.slice(length / 2);
    let priority = 0;
    for (const char of comp1) {
      if (comp2.includes(char)) {
        priority = PRIORITY_LOOKUP.indexOf(char);
      }
    }
    sum += priority;
  }
}

console.log({ sum });
