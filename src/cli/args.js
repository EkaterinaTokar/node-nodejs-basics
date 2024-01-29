const parseArgs = () => {
  const args = process.argv.slice(",");

  args.forEach((arg, index) => {
    if (arg.startsWith("--")) {
      console.log(`${arg.slice(2)} is ${args[index + 1]}`);
    }
  });
};

parseArgs();
