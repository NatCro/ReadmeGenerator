const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
      name: 'title',
      message: 'Provide a title for your project',

},
{
    type: 'input',
      name: 'description',
      message: 'Provide a description of your project',

},


];







// function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const content = generateMarkdown(answers);
      writeToFile('./generatedReadme/README.md', content);
    })
    }

// function call to initialize program
init();
