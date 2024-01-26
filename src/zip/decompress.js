import zlib from "node:zlib";
import stream from "node:stream";
import fs from "node:fs";
import * as url from "url";
const decompress = async () => {
  const unzip = zlib.createGunzip();
  const source = fs.createReadStream(
    url.fileURLToPath(new URL("files/archive.gz", import.meta.url))
  );
  const writeStream = fs.createWriteStream(
    url.fileURLToPath(new URL("files/fileToCompress2.txt", import.meta.url))
  );
  source.pipe(unzip).pipe(writeStream);
};

await decompress();
