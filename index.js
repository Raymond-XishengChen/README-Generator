// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your application repository: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please state any installation instructions for this project: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage of your project: ',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter names of contributors if there are any: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please state required tests if applicable: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project if applicable: ',
        choices: [
            "Apache License", "GNU General Public License", "Boost Software License", "MIT License", "Eclipse Public License", "Mozilla Public License", "None"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((responses)=>{
            const contents = generateMarkdown(responses);
            console.log(contents);
            fs.writeFile('./outputs/test.md', contents, err => {
                if (err){
                    console.log(err);
                }
            });
        })
}

// Function call to initialize app
init();
