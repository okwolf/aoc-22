import fs from "fs";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");

const labelIndex = lines.findIndex((line) => /^[ 0-9]+$/.test(line));
const labelLine = lines[labelIndex];
const stackIndexes = {};
for (let i = 0; i < labelLine.length; i++) {
  if (/[0-9]/.test(labelLine[i])) {
    stackIndexes[i] = labelLine[i];
  }
}
const stacks = [];
for (let i = labelIndex - 1; i >= 0; i--) {
  for (const j in stackIndexes) {
    const stackIndex = stackIndexes[j];
    if (lines[i][j] !== " ") {
      if (!stacks[stackIndex]) {
        stacks[stackIndex] = [];
      }
      stacks[stackIndex].push(lines[i][j]);
    }
  }
}
for (const line of lines.slice(labelIndex + 1)) {
  if (line) {
    const parsed = line.split(" ");
    const [, move, , from, , to] = parsed;
    for (let i = 0; i < move; i++) {
      stacks[to].push(stacks[from].pop());
    }
  }
}
const tops = stacks
  .slice(1)
  .map((stack) => stack[stack.length - 1])
  .join("");
console.log({ tops });
