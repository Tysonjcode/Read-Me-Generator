// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to initialize app
function init() {

//ask user for app name
    inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitUser'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },    
    {
        type: 'input',
        message: 'What is the namre of your project?',
        name: 'app_name',
    },
    {
        type: 'input',
        message: 'What is your app about?',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What licenses are you using?',
        name: 'license',
        choices: [
            'MIT',
            'AFL',
            'BSD',
            'WTFPL',
            'GPL'
        ]
    },
    {
        type: 'input',
        message: 'Provide detailed installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide detailed usage instructions',
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines for how others can contribute",
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Provide information around testing of your application',
        name: 'tests'
    }
    ]).then(function(ans){
        console.log({ans})

        const readme = generateMarkdown(ans);

        console.log(readme);

        const outputPath = path.join(__dirname, 'output', 'README.md');
        
        fs.writeFileSync(outputPath, readme, 'utf-8');
    })
}
init();

