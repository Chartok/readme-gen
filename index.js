// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is the description of your project?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and examples for use.',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What are the guidelines for contributing to your project?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Provide examples on how to run tests.',
            },
            {
                type: 'input',
                name: 'questions',
                message: 'What do I do if I have an issue?'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your project.',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Who created and are contributing to this project?',
            }
        ];

// TODO: Create a function to write README file
function write(markdownContent) {
    fs.writeFile('README.md', markdownContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}


// TODO: Create a function to initialize app
function init(write) {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        write(markdownContent);
    });
}

init(write);