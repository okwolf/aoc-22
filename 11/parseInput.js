export default (lines) => {
  const monkeys = [];
  for (const line of lines) {
    if (monkeys.length === 0 || !line) {
      monkeys.push({ inspectedCount: 0 });
    }
    if (!line) {
      continue;
    }
    const currentMonkey = monkeys[monkeys.length - 1];
    const trimmedLine = line.trim();
    const [label, rest] = trimmedLine.split(":");
    const params = rest.trim();
    if (label === "Starting items") {
      currentMonkey.items = params.split(",").map(Number);
    } else if (label === "Operation") {
      currentMonkey.op = new Function(
        "old",
        `const ${params.replace("new", "next")};return next;`
      );
    } else if (label === "Test") {
      currentMonkey.test = params.split("divisible by ").map(Number)[1];
    } else if (label === "If true") {
      currentMonkey.true = params.split("throw to monkey ").map(Number)[1];
    } else if (label === "If false") {
      currentMonkey.false = params.split("throw to monkey ").map(Number)[1];
    }
  }
  return monkeys.filter((monkey) => monkey.items);
};
