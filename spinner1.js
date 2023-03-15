let phrase = "Oh yes, it is totally okey.";

const spinner1 = function(letters) {
  for (let letter of letters) {
    setTimeout(() => {
      process.stdout.write(`\r| ${letter} `);
    }, 100);


    setTimeout(() => {
      process.stdout.write('\r/    ');
    }, 300);

    setTimeout(() => {
      process.stdout.write('\r-  ');
    }, 500);

    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write('\r\\  ');
    }, 700);
  }
  // ... fill in the rest yourself ...
};

spinner1(phrase);




