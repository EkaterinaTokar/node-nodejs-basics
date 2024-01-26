import crypto from "node:crypto";
import fs from "node:fs";
import * as url from "url";

const calculateHash = async () => {
  const readStream = fs.createReadStream(
    url.fileURLToPath(
      new URL("files/fileToCalculateHashFor.txt", import.meta.url)
    )
  );
  readStream.on("data", (chunk) => {
    const hash = crypto.createHash("sha256").update(chunk).digest("hex");
  });
  readStream.on("error", (error) => {
    console.log(error);
  });
  readStream.on("end", () => {
    console.log(`hash: ${hash}`);
  });
};

await calculateHash();
