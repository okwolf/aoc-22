import assert from "assert";

export const moveTail = ([tailRow, tailCol], [headRow, headCol]) => {
  if (
    Math.sqrt(Math.pow(tailCol - headCol, 2) + Math.pow(tailRow - headRow, 2)) <
    2
  ) {
    return [tailRow, tailCol];
  } else if (tailRow === headRow) {
    return [tailRow, tailCol < headCol ? tailCol + 1 : tailCol - 1];
  } else if (tailCol === headCol) {
    return [tailRow < headRow ? tailRow + 1 : tailRow - 1, tailCol];
  }
  return [
    tailRow < headRow ? tailRow + 1 : tailRow - 1,
    tailCol < headCol ? tailCol + 1 : tailCol - 1
  ];
};

for (const { H, T1, T2 } of [
  { H: [1, 1], T1: [1, 1], T2: [1, 1] },
  { H: [1, 3], T1: [1, 1], T2: [1, 2] },
  { H: [1, 3], T1: [1, 2], T2: [1, 2] },
  { H: [3, 1], T1: [1, 1], T2: [2, 1] },
  { H: [3, 1], T1: [2, 1], T2: [2, 1] },
  { H: [1, 2], T1: [3, 1], T2: [2, 2] },
  { H: [2, 3], T1: [3, 1], T2: [2, 2] },
  { H: [0, 2], T1: [1, 4], T2: [0, 3] },
  { H: [1, 1], T1: [0, 2], T2: [0, 2] },
  { H: [1, 1], T1: [0, 2], T2: [0, 2] }
]) {
  assert.deepEqual(moveTail(T1, H), T2);
}
