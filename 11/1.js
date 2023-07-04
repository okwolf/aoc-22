import fs from "fs";
import parseInput from "./parseInput.js";
const input = fs.readFileSync("./input.txt");
const lines = input.toString().split("\n");
const monkeys = parseInput(lines);

for (let i = 0; i < 20; i++) {
  for (const monkey of monkeys) {
    while (monkey.items.length > 0) {
      monkey.inspectedCount++;
      const item = monkey.items[0];
      const operatedItem = monkey.op(item);
      const boredItem = Math.floor(operatedItem / 3);
      const testResults = boredItem % monkey.test === 0;
      const throwTo = testResults ? monkey.true : monkey.false;

      monkey.items.shift();
      monkeys[throwTo].items.push(boredItem);
    }
  }
}

monkeys.sort((a, b) => b.inspectedCount - a.inspectedCount);
const monkeyBusiness = monkeys
  .slice(0, 2)
  .reduce((total, next) => total * next.inspectedCount, 1);
console.log({ monkeyBusiness });
