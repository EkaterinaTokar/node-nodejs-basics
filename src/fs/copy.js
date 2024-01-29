import * as fsPromises from "node:fs/promises";
import * as url from "node:url";

const folderCopy = url.fileURLToPath(new URL("files_copy", import.meta.url));
const folderFiles = url.fileURLToPath(new URL("files", import.meta.url));

const copy = async () => {
  try {
    const [folder] = await Promise.all([
      fsPromises.readdir(folderFiles),
      fsPromises.mkdir(folderCopy),
    ]);
    await Promise.all(
      folder.map((file) => {
        fsPromises.copyFile(
          url.fileURLToPath(new URL(`files/${file}`, import.meta.url)),
          url.fileURLToPath(new URL(`files_copy/${file}`, import.meta.url))
        );
      })
    );
  } catch (error) {
    throw new Error(`FS operation failed`);
  }
};

await copy();
