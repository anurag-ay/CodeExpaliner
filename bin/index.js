#!/usr/bin/env node
import chalk from "chalk";
import explainCode from "../openAi/explainCode.js";
import readFile from "../utils/readFile.js";
import { startLoaderAnimation, stopLoaderAnimation } from "../utils/loader.js";

//Get the file name from the command line argument
const fileName = process.argv[2];

async function getExpalinedCode(fileName) {
  // starting animation while loading
  const animationObjects = startLoaderAnimation();

  try {
    // Reading file
    const textFileData = await readFile(fileName);

    // Passing file's text data for getting explaination
    const expalinedCodeText = await explainCode(textFileData);

    // stopping loader animation
    stopLoaderAnimation(animationObjects);

    // Printing code expalaination
    console.log(`${expalinedCodeText}\n`);

    // Print final message
    console.log(chalk.bgGreen.bold("Hope that helps."));
  } catch (err) {
    animationObjects.spinner.error({ text: err.message });
    process.exit(1);
  }
}
getExpalinedCode(fileName);
