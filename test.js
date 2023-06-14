import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

const dirs = fs
  .readdirSync(".")
  .map((name) => parseInt(name))
  .filter((name) => name && fs.statSync(String(name)).isDirectory())
  .sort((a, b) => a - b);
for (const name of dirs) {
  const absoluteDir = path.resolve(String(name));
  for (const script of ["1", "2"]) {
    const absoluteScript = path.join(absoluteDir, `${script}.js`);
    if (fs.existsSync(absoluteScript)) {
      console.log(`Day ${name} Part ${script}`);
      spawnSync(`node ${absoluteScript}`, {
        cwd: absoluteDir,
        shell: true,
        stdio: "inherit"
      });
    }
  }
}
