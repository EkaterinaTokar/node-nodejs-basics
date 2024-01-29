import { Transform } from "node:stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(data, encoding, callback) {
      this.push(data.toString().split("").reverse().join(""));
      callback();
    },
  });
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
