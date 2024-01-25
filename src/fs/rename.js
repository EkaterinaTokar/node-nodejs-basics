import * as fsPromises from "node:fs/promises";
import * as url from "url";

const folderFiles = url.fileURLToPath(new URL("files", import.meta.url));

const rename = async () => {
  try {
    await fsPromises.rename(
      url.fileURLToPath(new URL("files/wrongFilename.txt", import.meta.url)),
      url.fileURLToPath(new URL("files/properFilename.md", import.meta.url))
    );
    // await fsPromises.rename(
    //  url.fileURLToPath(new URL("files/properFilename.md", import.meta.url)),
    //  url.fileURLToPath(new URL("files/wrongFilename.txt", import.meta.url))
    // );
  } catch (error) {
    console.error(`FS operation failed: ${error}`);
    throw Error(`FS operation failed`);
  }
};

await rename();
