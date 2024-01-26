import fs from "node:fs";
import * as url from "url";

const read = async () => {
  const readStream = fs.createReadStream(
    url.fileURLToPath(new URL("files/fileToRead.txt", import.meta.url))
  );
  readStream.on("data", (chunk) => {
    process.stdout.write(chunk.toString() + "\n");
  });
};

await read();
