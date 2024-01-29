import * as fsPromises from "node:fs/promises";
import * as url from "node:url";

const remove = async () => {
  try {
    await fsPromises.unlink(
      url.fileURLToPath(new URL("files/fileToRemove.txt", import.meta.url))
    );
  } catch (error) {
    throw Error(`FS operation failed`);
  }
};

await remove();
