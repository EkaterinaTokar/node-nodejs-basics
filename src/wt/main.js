import { Worker } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  const workerPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "worker.js"
  );
  const results = new Array(numCPUs);
  const promises = [];

  for (let i = 0; i < numCPUs; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, { workerData: 10 + i });
        worker.on("message", (result) => {
          results[i] = { status: "resolved", data: result };
          resolve();
        });

        worker.on("error", () => {
          results[i] = { status: "error", data: null };
          resolve();
        });

        worker.on("exit", (code) => {
          if (code !== 0) {
            results[i] = { status: "error", data: null };
            resolve();
          }
        });
      })
    );
  }

  await Promise.all(promises);

  console.log("Results:", results);
};

await performCalculations();
