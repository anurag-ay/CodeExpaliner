#!/usr/bin/env node

require("dotenv").config();
const explainCode = require("../openAi/explainCode");
const readFile = require("../utils/readFile");

//Get the file name from the command line argument
const fileName = process.argv[2];

async function getExpalinedCode(fileName) {
  try {
    const textFileData = await readFile(fileName);
    // const expalinedCodeText = await explainCode(textFileData);

    const expalinedCodeText = "Hello My Name is Anurag Yadav ";
    console.log(expalinedCodeText);
  } catch (err) {
    console.error(err);
  }
}
getExpalinedCode(fileName);
