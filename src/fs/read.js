import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  try {
    const filePath =
      path.dirname(fileURLToPath(import.meta.url)) +
      "/files_copy/fileToRead.txt";
    console.log(await fsPromises.readFile(filePath, { encoding: "utf8" }));
  } catch (err) {
    console.error(err.message);
  }
};

await read();
