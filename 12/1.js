import fs from "fs";
import countHillSteps from "./countHillSteps.js";

const input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
const steps = countHillSteps(input);
console.log({ steps });
