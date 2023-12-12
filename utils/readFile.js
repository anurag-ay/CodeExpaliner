import fs from "fs";
import chalk from "chalk";

function readFile(fileName) {
  //Check if the file name is provided
  if (!fileName) {
    console.error(
      chalk.redBright("Please provide a file name") +
        chalk.green("\nLike this: CodeExpaliner <File Name>")
    );
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

export default readFile;
