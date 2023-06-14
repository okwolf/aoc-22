import fs from "fs";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");
const cycles = [1];

for (const line of lines) {
  const [command, arg] = line.split(" ");
  const x = cycles[cycles.length - 1];
  if (command === "noop") {
    cycles.push(x);
  } else if (command === "addx") {
    cycles.push(x);
    cycles.push(x + parseInt(arg));
  }
}

let signalStrength = 0;
for (let i = 19; i < cycles.length; i += 40) {
  signalStrength += (i + 1) * cycles[i];
}
console.log({ signalStrength });
