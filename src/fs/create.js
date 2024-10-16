import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  fsPromises.writeFile(
    __dirname + "/files/fresh.txt",
    "I am fresh and young",
    { flag: "wx" },
    (err) => console.log("FS operation failed")
  );
  console.log("Saved!");
};

await create();
