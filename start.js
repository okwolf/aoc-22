import fs from "fs";
import path from "path";
import { spawn } from "child_process";

const timersPerFile = {};
const handleFileChange = (filename) => {
  clearTimeout(timersPerFile[filename]);
  const absolutePath = path.resolve(filename);
  const absoluteDir = path.dirname(absolutePath);
  const spawnScript = (script) =>
    spawn(`node ${script}`, {
      cwd: absoluteDir,
      shell: true,
      stdio: "inherit"
    });
  if (/[12]\.js$/.test(filename)) {
    spawnScript(absolutePath);
  } else {
    for (const scriptName of ["1.js", "2.js"]) {
      const absoluteScript = path.join(absoluteDir, scriptName);
      if (fs.existsSync(absoluteScript)) {
        spawnScript(absoluteScript);
      }
    }
  }
};
const debouncedFileChange = (filename) => {
  clearTimeout(timersPerFile[filename]);
  timersPerFile[filename] = setTimeout(handleFileChange, 50, filename);
};

fs.watch(".", { recursive: true }, (_, filename) => {
  debouncedFileChange(filename);
});
