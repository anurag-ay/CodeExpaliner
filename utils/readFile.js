const fs = require("fs");

function readFile(fileName) {
  //Check if the file name is provided
  if (!fileName) {
    console.error("Please provide a file name");
    process.exit(1);
  }

  // Read the file content using fs.readFile and return it.
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, textFile) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(textFile);
    });
  });
}

module.exports = readFile;
