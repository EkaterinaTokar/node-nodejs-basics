import * as fsPromises from "node:fs/promises";
import * as url from "node:url";

const list = async () => {
  try {
    const files = await fsPromises.readdir(
      url.fileURLToPath(new URL("files", import.meta.url))
    );
    for (const file of files) console.log(file);
  } catch (error) {
    throw Error(`FS operation failed`);
  }
};

await list();
