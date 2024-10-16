import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
  const scriptPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files/script.js"
  );

  const child = fork(scriptPath, args);

  process.stdin.on("data", (data) => {
    child.send(data);
  });
  child.on("error", (err) => {
    console.error("Failed to start child process:", err);
  });

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(["someArgument1", "someArgument2"]);
