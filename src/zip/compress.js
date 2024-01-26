import zlib from "node:zlib";
import stream from "node:stream";
import fs from "node:fs";
import * as url from "url";

async function compress() {
  const gzip = zlib.createGzip();
  const source = fs.createReadStream(
    url.fileURLToPath(new URL("files/fileToCompress.txt", import.meta.url))
  );
  const writeStream = fs.createWriteStream(
    url.fileURLToPath(new URL("files/archive.gz", import.meta.url))
  );
  source.pipe(gzip).pipe(writeStream);
  console.log("Zipped Successfully");
}

await compress();
