import path from "path";
import { fileURLToPath } from "url";
import crypto from "node:crypto";
import fs from "fs";

const calculateHash = async () => {
  const content =
    path.dirname(fileURLToPath(import.meta.url)) +
    "/files/fileToCalculateHashFor.txt";
  const stream = fs.createReadStream(content);
  const hash = crypto.createHash("sha256");
  stream.on("data", (data) => {
    console.log(`hash: ${hash.update(data).digest("hex")}`);
  });
};

await calculateHash();
