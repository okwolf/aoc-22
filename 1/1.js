import fs from "fs";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");
const elves = [0];
for (const line of lines) {
  if (line) {
    elves[elves.length - 1] += parseInt(line);
  } else {
    elves.push(0);
  }
}
elves.sort((a, b) => b - a);
const maxCals = elves[0];
console.log({ maxCals });
