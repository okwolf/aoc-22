import fs from "fs";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");

const PRIORITY_LOOKUP = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let sum = 0;
for (let i = 0; i < lines.length; i += 3) {
  const group = lines.slice(i, i + 3);
  if (group.length === 3) {
    const [first, ...rest] = group;
    let priority = 0;
    for (const char of first) {
      if (rest.every((other) => other.includes(char))) {
        priority = PRIORITY_LOOKUP.indexOf(char);
      }
    }
    sum += priority;
  }
}

console.log({ sum });
