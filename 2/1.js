import fs from "fs";

const SCORES = {
  AX: 1 + 3,
  AY: 2 + 6,
  AZ: 3 + 0,
  BX: 1 + 0,
  BY: 2 + 3,
  BZ: 3 + 6,
  CX: 1 + 6,
  CY: 2 + 0,
  CZ: 3 + 3
};

const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");

let totalScore = 0;
for (const line of lines) {
  const move = line.replace(" ", "");
  if (move in SCORES) {
    const roundScore = SCORES[move];
    totalScore += roundScore;
  }
}
console.log({ totalScore });
