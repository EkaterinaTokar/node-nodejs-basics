import * as fsPromises from "node:fs/promises";
import * as url from "node:url";

const read = async () => {
  try {
    const fileToRead = await fsPromises.readFile(
      url.fileURLToPath(new URL("files/fileToRead.txt", import.meta.url))
    );
    console.log(fileToRead.toString());
  } catch (error) {
    throw Error(`FS operation failed`);
  }
};

await read();
