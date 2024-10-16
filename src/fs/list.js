import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const list = async () => {
  try {
    const filePath =
      path.dirname(fileURLToPath(import.meta.url)) + "/files_copy";
    const files = await fsPromises.readdir(filePath);
    for (const file of files) console.log(file);
  } catch (err) {
    console.error(err.message);
  }
};

await list();
