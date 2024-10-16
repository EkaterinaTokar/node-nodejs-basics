const parseArgs = () => {
  let args = process.argv.slice(2);
  args.forEach((el, index, arr) => {
    if (el.startsWith("--")) {
      console.log(`${el} is ${arr[index + 1]}`);
    }
  });
};

parseArgs();
