const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        name: 'project_title',
        message: 'What is your project title?'
    },
    {
        name: 'sections_entitled',
        message: 'Sections Entitled: '
    },
    {
        name: 'description',
        message: 'Please enter description: '
    },
    {
        name: 'table_of_contents',
        message: 'Table of Contents: '
    },
    {
        name: 'Installation',
        message: 'Installation: '
    },
    {
        name: 'Usage',
        message: 'Usage: '
    },
    {
        name: 'License',
        message: 'License: '
    },
    {
        name: 'Contributing',
        message: 'Contributing: '
    },
    {
        name: 'Tests',
        message: 'Tests: '
    },
    {
        name: 'Questions',
        message: 'Questions: '
    }
])

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
