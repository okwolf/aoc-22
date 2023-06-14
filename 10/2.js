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

const crt = [];
let k = 0;
for (let i = 0; i < 6; i++) {
  crt[i] = [];
  for (let j = 0; j < 40; j++) {
    crt[i][j] = cycles[k] >= j - 1 && cycles[k] <= j + 1 ? "█" : " ";
    k++;
  }
}
for (const line of crt) {
  console.log(line.join(""));
}
