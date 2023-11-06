import fs from "fs";
import countHillSteps from "./countHillSteps.js";

const input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
const startAnywhereInput = input.replace("S", "a");
let steps = Infinity;
for (const { index } of startAnywhereInput.matchAll(/a/g)) {
  const result = countHillSteps(
    startAnywhereInput.slice(0, index) +
      "S" +
      startAnywhereInput.slice(index + 1)
  );
  steps = result < steps ? result : steps;
}
console.log({ steps });
