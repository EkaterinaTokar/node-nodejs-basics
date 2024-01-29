import * as fsPromises from "node:fs/promises";
import * as url from "node:url";

const folderFiles = url.fileURLToPath(new URL("files", import.meta.url));

const rename = async () => {
  try {
    await fsPromises.rename(
      url.fileURLToPath(new URL("files/wrongFilename.txt", import.meta.url)),
      url.fileURLToPath(new URL("files/properFilename.md", import.meta.url))
    );
  } catch (error) {
    throw Error(`FS operation failed`);
  }
};

await rename();
