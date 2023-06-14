import fs from "fs";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");

let count = 0;
for (const line of lines) {
  const parsed = line
    .split(",")
    .map((range) => range.split("-").map((s) => parseInt(s)));
  if (parsed.length === 2) {
    const [[aStart, aEnd], [bStart, bEnd]] = parsed;
    if (
      (bStart >= aStart && bEnd <= aEnd) ||
      (aStart >= bStart && aEnd <= bEnd)
    ) {
      count++;
    }
  }
}

console.log({ count });
