import { Worker } from "node:worker_threads";
import os from "node:os";
import * as url from "url";

const performCalculations = async () => {
  const results = [];

  const createWorker = (i) => {
    return new Promise((resolve) => {
      const worker = new Worker(
        url.fileURLToPath(new URL("worker.js", import.meta.url))
      );
      worker.postMessage(10 + i);

      worker.once("message", (message) => {
        results[i] = { status: "resolved", data: message };
        resolve();
      });

      worker.once("error", (error) => {
        results[i] = { status: "error", data: null };
        resolve();
      });
    });
  };

  for (let i = 0; i < os.cpus().length; i++) {
    results.push(createWorker(i));
  }
  await Promise.all(results);

  console.log("Array of results:", results);
};

await performCalculations();
