#! /usr/bin/env node
// This line is called a shebang, It tells the operating system to run with nodejs.

// Import "inquirer" from module, Which is command line interface for nodejs.
import inquirer from "inquirer";
import chalk from "chalk";

// Declare a constant "answere" and assign it to the result of inquirer.prompt function.
const answres: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: chalk.yellow("Inter your Sentence to count the world:"),
  },
]);

const wordCount = answres.Sentence.trim().split(" ");
console.log(chalk.bgGrey.bold("\n\t Sentence word"));

// Print the array of sentence words to the console.
console.log(wordCount);

// Print the sentence words count to the console.
console.log(chalk.bgGrey.bold("\n\t Word count"));
console.log(chalk.bold.yellow(`Your sentence word count is: ${chalk.green(wordCount.length)}`));
