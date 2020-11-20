const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./util/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([
      {
        message: "The array will be structured as... let (answer here) = []",
        name: "let",
      },
      {
          message: "Please populate the array here",
          name: "array",
        }
    ]);
}
     


async function init() {
    try {
        const answers = await promptUser();
        const ReadMe = generateMarkdown(answers);
        await writeFileAsync("readmeStorage/readme.md", ReadMe);
        console.log("Successfully created array");
    } catch (err) {
        console.log(err);
    }
}

init();







// .then(function({
//     title,
//     description,
//     installation,
//     usage,
//     license,
//     contribution,
//     username,
//     email,
// }) {
//     console.log(title);
//     console.log(license);
//     fs.writeFile(
//         `${title}readme.md`,
//         `# ${title}
// ## ${description} 
// ![License](https://img.shields.io/badge/License-${license}-blue.svg "License Badge")
// # Table of Contents :

// - [Installation](#installation)
// - [Contributing](#contribution)
// - [Test](#tests)
// - [Questions](#questions)
// ## Installation:
// ${installation} 
// ## Usage:
// ${usage} 
// ## Contributing:
// ${contribution}   
// ## Questions
// ${username} 
// ${email} `,

//         function(err) {
//             if (err) {
//                 return console.log(err);
//             }
//         }
//     );

// console.log("success");