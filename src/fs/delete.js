import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  try {
    const filePath =
      path.dirname(fileURLToPath(import.meta.url)) +
      "/files_copy/fileToRemove.txt";
    await fsPromises.rm(filePath);
  } catch (err) {
    console.error(err.message);
  }
};

await remove();
