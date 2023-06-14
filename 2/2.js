import fs from "fs";

const SCORES = {
  AX: 3 + 0,
  AY: 1 + 3,
  AZ: 2 + 6,
  BX: 1 + 0,
  BY: 2 + 3,
  BZ: 3 + 6,
  CX: 2 + 0,
  CY: 3 + 3,
  CZ: 1 + 6
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
