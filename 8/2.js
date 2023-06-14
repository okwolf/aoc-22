import fs from "fs";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");

const map = [];
for (const line of lines) {
  if (line) {
    map.push([...line].map((char) => parseInt(char)));
  }
}

let maxScenic = 0;
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    const num = map[i][j];
    let countLeft = 0;
    for (let k = j - 1; k >= 0; k--) {
      countLeft++;
      if (map[i][k] >= num) {
        break;
      }
    }
    let countRight = 0;
    for (let k = j + 1; k < map[i].length; k++) {
      countRight++;
      if (map[i][k] >= num) {
        break;
      }
    }
    let countUp = 0;
    for (let k = i - 1; k >= 0; k--) {
      countUp++;
      if (map[k][j] >= num) {
        break;
      }
    }
    let countDown = 0;
    for (let k = i + 1; k < map.length; k++) {
      countDown++;
      if (map[k][j] >= num) {
        break;
      }
    }
    const scenic = countLeft * countRight * countUp * countDown;
    maxScenic = scenic > maxScenic ? scenic : maxScenic;
  }
}

console.log({ maxScenic });
