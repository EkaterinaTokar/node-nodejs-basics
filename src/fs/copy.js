import * as fsPromises from "node:fs/promises";
import * as url from "url";

const folderCopy = url.fileURLToPath(new URL("files_copy", import.meta.url));
const folderFiles = url.fileURLToPath(new URL("files", import.meta.url));

const copy = async () => {
  try {
    // fsPromises.mkdir(folderName);
    const [folder] = await Promise.all([
      fsPromises.readdir(folderFiles),
      fsPromises.mkdir(folderCopy),
    ]);
    const copyPromises = folder.map((file) => {
      fsPromises.copyFile(
        url.fileURLToPath(new URL(`files/${file}`, import.meta.url)),
        url.fileURLToPath(new URL(`files_copy/${file}`, import.meta.url))
      );
    });
    await Promise.all(copyPromises);
  } catch (error) {
    console.error(`FS operation failed: ${error}`);
    throw Error(`FS operation failed`);
  }
};

await copy();
