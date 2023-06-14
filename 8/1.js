import fs from "fs";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");

const map = [];
for (const line of lines) {
  if (line) {
    map.push([...line].map((char) => parseInt(char)));
  }
}

let count = 0;
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    const num = map[i][j];
    if (i === 0 || j === 0 || i === map.length - 1 || j === map[i].length - 1) {
      count++;
    } else {
      let visible = true;
      for (let k = 0; k < j; k++) {
        if (visible && map[i][k] >= num) {
          visible = false;
        }
      }
      if (visible) {
        count++;
      } else {
        visible = true;
        for (let k = j + 1; k < map[i].length; k++) {
          if (visible && map[i][k] >= num) {
            visible = false;
          }
        }
        if (visible) {
          count++;
        } else {
          visible = true;
          for (let k = 0; k < i; k++) {
            if (visible && map[k][j] >= num) {
              visible = false;
            }
          }
          if (visible) {
            count++;
          } else {
            visible = true;
            for (let k = i + 1; k < map.length; k++) {
              if (visible && map[k][j] >= num) {
                visible = false;
              }
            }
            if (visible) {
              count++;
            }
          }
        }
      }
    }
  }
}

console.log({ count });
