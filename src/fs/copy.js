import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const files = await fsPromises.readdir(__dirname + "/files");

  try {
    await fsPromises.access(__dirname + "/files_copy");
    console.log(`FS operation failed`);
  } catch (error) {
    await fsPromises.mkdir(__dirname + "/files_copy", { recursive: true });
    console.log(`created successfully`);
  }

  files.forEach((file) => {
    fsPromises.copyFile(
      path.join(__dirname + "/files", file),
      path.join(__dirname + "/files_copy", file)
    );
  });
};

await copy();
