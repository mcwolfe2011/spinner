const spinner1 = function(time) {
  return spin(time);
};

const spin = function(timer) {
  setTimeout(() => {
    process.stdout.write(`\r| \r/  \r- \r\\`);
  }, timer);
};
spin();

spinner1(spin(40));