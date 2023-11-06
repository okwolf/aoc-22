export default (input) => {
  let start = { x: 0, y: 0, code: 0 },
    end = { x: 0, y: 0, code: 0 };
  const map = input.split("\n").map((line, y) =>
    line.split("").map((cell, x) => {
      if (cell === "S") return (start = { x, y, code: "a".charCodeAt(0) });
      else if (cell === "E") return (end = { x, y, code: "z".charCodeAt(0) });
      else return { x, y, code: cell.charCodeAt(0) };
    })
  );
  const queue = [{ ...start, steps: 0 }];
  const visited = new Set(`${start.x},${start.y}}`);
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.x === end.x && current.y === end.y) return current.steps;
    const neighbors = [
      map[current.y - 1] && map[current.y - 1][current.x],
      map[current.y + 1] && map[current.y + 1][current.x],
      map[current.y][current.x - 1],
      map[current.y][current.x + 1]
    ]
      .filter((cell) => cell && !visited.has(`${cell.x},${cell.y}`))
      .filter((cell) => cell.code - current.code <= 1)
      .map((cell) => ({ ...cell, steps: current.steps + 1 }));
    neighbors.forEach((cell) => visited.add(`${cell.x},${cell.y}`));
    queue.push(...neighbors);
  }
  return Infinity;
};
