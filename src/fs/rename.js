import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const currentPath =
    path.dirname(fileURLToPath(import.meta.url)) +
    "/files_copy/wrongFilename.txt";
  const newPath =
    path.dirname(fileURLToPath(import.meta.url)) +
    "/files_copy/properFilename.md";
  try {
    await fsPromises.rename(currentPath, newPath);
  } catch (err) {
    console.log("FS operation failed ");
  }
};

await rename();
