import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const write = async () => {
  const writeStream = fs.createWriteStream(
    path.dirname(fileURLToPath(import.meta.url)) + "/files/fileToWrite.txt"
  );
  process.stdin.pipe(writeStream);
  process.stdin.end();
};

await write();
