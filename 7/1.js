import fs from "fs";
import { parseInput } from "./parseInput.js";
const input = fs.readFileSync("./input.txt");
const { root, directorySizes } = parseInput(input);

// const printNode = (node, indent) => {
//   console.log(
//     `${" ".repeat(indent)}- ${node.name} (${node.type}${
//       node.size > -1 ? `, size=${node.size}` : ""
//     })`
//   );
//   node.children.forEach((child) => printNode(child, indent + 2));
// };
// printNode(root, 0);
const totalSize = directorySizes
  .sort()
  .filter((size) => size <= 100000)
  .reduce((total, next) => total + next, 0);
console.log({ totalSize });
