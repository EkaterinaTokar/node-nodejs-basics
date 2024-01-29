import zlib from "node:zlib";
import fs from "node:fs";
import * as url from "node:url";

async function compress() {
  const gzip = zlib.createGzip();
  const source = fs.createReadStream(
    url.fileURLToPath(new URL("files/fileToCompress.txt", import.meta.url))
  );
  const writeStream = fs.createWriteStream(
    url.fileURLToPath(new URL("files/archive.gz", import.meta.url))
  );
  source.pipe(gzip).pipe(writeStream);
}

await compress();
