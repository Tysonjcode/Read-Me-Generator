// TODO: Create a function that returns a license badge based on which license is passed in
function generateBadgeUrl(license){
  return `![${license}](https://img.shields.io/badge/License-MIT-blue)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.app_name}

This project is licensed under ${data.license}  
## ${generateBadgeUrl(data.license)}

## ${data.description}
  
# Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

## Installation Instructions
${data.installation}

## Usage Information
"${data.usage}"

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.tests}

## Questions
Find my github profile at [${data.gitUser}](https://github.com/${data.gitUser}) and the project [GitHub Repository](https://github.com/${data.gitUser}/${data.repo}) here.

If you you have any questions you can email me them via:
- ${data.email}`;
}

module.exports = generateMarkdown;
