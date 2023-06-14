import fs from "fs";
import { moveTail } from "./moveTail.js";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");

const rope = Array(10).fill([0, 0]);
const visitedPositions = new Set();
for (const line of lines) {
  if (line) {
    const [dir, amount] = line.split(" ");
    for (let i = 0; i < parseInt(amount); i++) {
      if (dir === "L") {
        rope[0][1]--;
      } else if (dir === "R") {
        rope[0][1]++;
      } else if (dir === "U") {
        rope[0][0]--;
      } else if (dir === "D") {
        rope[0][0]++;
      }
      for (let j = 1; j < rope.length; j++) {
        rope[j] = moveTail(rope[j], rope[j - 1]);
      }
      visitedPositions.add(rope[rope.length - 1].join(","));
    }
  }
}
const visitedPositionsSize = visitedPositions.size;
console.log({ visitedPositionsSize });
