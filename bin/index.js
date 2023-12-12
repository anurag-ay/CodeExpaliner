#!/usr/bin/env node
import chalk from "chalk";
import explainCode from "../openAi/explainCode.js";
import readFile from "../utils/readFile.js";
import { startLoaderAnimation, stopLoaderAnimation } from "../utils/loader.js";

//Get the file name from the command line argument
const fileName = process.argv[2];

async function getExplainedCode(fileName) {
  // starting animation while loading

  try {
    // Reading file
    const textFileData = await readFile(fileName);
    const animationObjects = startLoaderAnimation();
    // Passing file's text data for getting explanation
    const explainedCodeText = await explainCode(textFileData);

    // stopping loader animation
    stopLoaderAnimation(animationObjects);

    // Printing code expalaination
    console.log(`${explainedCodeText}\n`);

    // Print final message
    console.log(chalk.bgGreen.bold("Hope that helps."));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}
getExplainedCode(fileName);
