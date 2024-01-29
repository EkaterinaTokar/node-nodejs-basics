import * as fsPromises from "node:fs/promises";
import * as url from "node:url";

const data = "I am fresh and young";
const __dirname = url.fileURLToPath(
  new URL("files/fresh.txt", import.meta.url)
);

const create = async () => {
  try {
    await fsPromises.writeFile(__dirname, data, { flag: "wx" });
  } catch (error) {
    throw new Error(`Failed to create file: ${error}`);
  }
};

await create();
