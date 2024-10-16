import zlib from "zlib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const compress = async () => {
  const input = fs.createReadStream(
    path.dirname(fileURLToPath(import.meta.url)) + "/files/fileToCompress.txt"
  );
  const output = fs.createWriteStream(
    path.dirname(fileURLToPath(import.meta.url)) + "/files/archive.gz"
  );
  const zip = zlib.createGzip();
  input.pipe(zip).pipe(output);
};

await compress();
