import fs from "node:fs";
import * as url from "node:url";

const write = async () => {
  const writeableStream = fs.createWriteStream(
    url.fileURLToPath(new URL("files/fileToWrite.txt", import.meta.url))
  );
  process.stdin.pipe(writeableStream);
  process.stdin.end();
};

await write();
