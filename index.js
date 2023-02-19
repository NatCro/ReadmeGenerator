const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];







// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const content = generatedMarkdown(answers);
      writeToFile('README.md', content);
    })
    }

// function call to initialize program
init();
