import { Transform } from "node:stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(data, encoding, callback) {
      this.push(data.toString().toUpperCase());
      callback();
    },
  });
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
