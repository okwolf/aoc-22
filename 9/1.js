import fs from "fs";
import { moveTail } from "./moveTail.js";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");

let H = [0, 0];
let T = [0, 0];
const visitedPositions = new Set();
for (const line of lines) {
  if (line) {
    const [dir, amount] = line.split(" ");
    for (let i = 0; i < parseInt(amount); i++) {
      if (dir === "L") {
        H[1]--;
      } else if (dir === "R") {
        H[1]++;
      } else if (dir === "U") {
        H[0]--;
      } else if (dir === "D") {
        H[0]++;
      }
      T = moveTail(T, H);
      visitedPositions.add(T.join(","));
    }
  }
}
const visitedPositionsSize = visitedPositions.size;
console.log({ visitedPositionsSize });
