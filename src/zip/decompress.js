import { createUnzip } from "zlib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const decompress = async () => {
  const input = fs.createReadStream(
    path.dirname(fileURLToPath(import.meta.url)) + "/files/archive.gz"
  );
  const output = fs.createWriteStream(
    path.dirname(fileURLToPath(import.meta.url)) + "/files/fileToCompress2.txt"
  );
  const unzip = createUnzip();
  input.pipe(unzip).pipe(output);
};

await decompress();
