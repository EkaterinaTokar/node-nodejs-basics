import { createReadStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
const read = async () => {
  const readStream = createReadStream(
    path.dirname(fileURLToPath(import.meta.url)) + "/files/fileToRead.txt"
  );
  readStream.on("data", (chunk) => {
    process.stdout.write(chunk.toString() + "\n");
  });
};

await read();
