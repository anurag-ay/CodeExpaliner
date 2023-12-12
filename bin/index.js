#!/usr/bin/env node

import explainCode from "../openAi/explainCode.js";
import readFile from "../utils/readFile.js";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";

//Get the file name from the command line argument
const fileName = process.argv[2];

async function getExpalinedCode(fileName) {
  const spinner = createSpinner("Getting explaination please wait....\n");
  try {
    const textFileData = await readFile(fileName);
    spinner.start();
    // const expalinedCodeText = await explainCode(textFileData);
    const expalinedCodeText = "Hello My Name is Anurag Yadav ";
    spinner.success();
    console.log(`${expalinedCodeText}\n`);
  } catch (err) {
    spinner.error({ text: err.message });
    process.exit(1);
  }
}
getExpalinedCode(fileName);
