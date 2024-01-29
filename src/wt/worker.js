import { workerData, parentPort } from "node:worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread

  //console.log(parentPort.postMessage(workerData));
  parentPort.on("message", (message) => {
    let result = nthFibonacci(message); //workerData
    parentPort.postMessage(result);
  });
  // if (Math.random() > 0.5) throw new Error("Generated Error");
};

sendResult();
