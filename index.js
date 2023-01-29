const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    name: "title",
    message: "What is your project title?",
  },
  {
    name: "sections_entitled",
    message: "Sections Entitled: ",
  },
  {
    name: "description",
    message:
      "Description: \n\n(Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide): ",
  },
  {
    name: "installation",
    message:
      "Installation: \n\n(What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running): ",
  },
  {
    name: "usage",
    message:
      "Usage: \n\n(Provide instructions and examples for use. Include screenshots as needed)",
  },
  {
    name: "license",
    message:
      "License: \n\n(The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to (https://choosealicense.com/))",
  },
  {
    name: "contributing",
    message:
      "Contributing: \n\nIf you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The (https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
  },
  {
    name: "tests",
    message:
      "Tests: \n\n(Go the extra mile and write tests for your application. Then provide examples on how to run them here): ",
  },
  {
    name: "questions",
    message: "Questions: ",
  },
];

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.appendFile("README.md", generateMarkdown(data), (err) => {
      if (err) return console.log(err);
    });
  });
}

// function call to initialize program
init();
