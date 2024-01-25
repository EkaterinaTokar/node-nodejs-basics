import * as fsPromises from "node:fs/promises";
import * as url from "url";

const data = "I am fresh and young";
const __dirname = url.fileURLToPath(
  new URL("files/fresh.txt", import.meta.url)
);

const create = async () => {
  try {
    await fsPromises.writeFile(__dirname, data, { flag: "wx" });
  } catch (error) {
    console.error(`FS operation failed: ${error}`);
    throw Error(`FS operation failed`);
  }
};

await create();
