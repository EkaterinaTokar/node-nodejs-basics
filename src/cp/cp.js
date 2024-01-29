import { fork } from "node:child_process";
import * as url from "node:url";

const spawnChildProcess = async (args) => {
  const child = fork(
    url.fileURLToPath(new URL("files/script.js", import.meta.url)),
    args,
    { stdio: ["pipe", "pipe", "ipc"] }
  );
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on("error", (err) => {
    console.error("Child process error:", err);
  });
  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(["someArgument1", "someArgument2"]);
