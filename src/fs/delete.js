import * as fsPromises from "node:fs/promises";
import * as url from "url";

const remove = async () => {
  try {
    await fsPromises.unlink(
      url.fileURLToPath(new URL("files/fileToRemove.txt", import.meta.url))
    );
  } catch (error) {
    console.error(`FS operation failed: ${error}`);
    throw Error(`FS operation failed`);
  }
};

await remove();
