import fs from "fs";
import { parseInput } from "./parseInput.js";
const input = fs.readFileSync("./input.txt");
const { root, directorySizes } = parseInput(input);

const currentFreeSize = 70000000 - root.size;
const sizeToFree = 30000000 - currentFreeSize;
const sizeFreed = directorySizes
  .sort((a, b) => a - b)
  .find((size) => size >= sizeToFree);
console.log({ sizeFreed });
