//Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require()





//Array of inquirer questions
const questions = [
    {
      type: 'input',
      message: 'What text would you like to include (3 letters max)?',
      name: 'svgText',
      default: 'SVG Text',
      validate:  (svgText) => {
        if (svgText.length <= 3) {
          return true;
        } else {
          
          return 'ERROR: Please enter a text with 3 or fewer characters';
        }
    }
    },
    {
      type: 'input',
      message: 'What color should the text be?',
      name: 'textColor',
      default: 'Text Color',
      validate: (textColor) => {
        if (textColor.length != '') {
          return true;
        } else {
          
          return 'ERROR: Please enter a text with 3 or fewer characters';
        }
    }
    },
    {
      type: 'input',
      message: 'What color should the SVG shape be?',
      name: 'svgColor',
      default: 'Technologies Utlized'
      validate: (svgColor) => {
        if (svgColor.length != '') {
          return true;
        } else {
          
          return 'ERROR: Please enter a text with 3 or fewer characters';
        }
    }
    },
    {
      type: 'list',
      message: 'What shape should the SVG be?',
      name: 'svgShape',
      choices: ['circle',
        'triangle',
        'square'],
      default: 'square',   
    },
  ]


// Create a function to write SVG file
function writeToFile(response) {
  let badge ='';
  switch(response.license){
    case 'Apache License 2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    
  }

  fs.writeFile('logo.svg',
  
  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${svgShape} cx="150" cy="100" r="80" fill="${svgColor}" />
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${svgText}</text>
  
  </svg>` , 
  (err) => err ? console.error(err) : console.log('Generated logo.svg!')) 
}

function init() {
  inquirer.prompt(questions)
  .then((response) =>  
 writeToFile(response));
}

init();

