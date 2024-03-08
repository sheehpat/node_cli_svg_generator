//Packages needed for application
const inquirer = require('inquirer');
const createSVG  = require('./lib/createsvg');

//Array of inquirer questions
const questions = [
    {
      type: 'input',
      message: 'What text would you like to include (3 letters max)?',
      name: 'svgText',
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
      validate: (textColor) => {
        if (textColor.length != 0) {
          return true;
        } else {
          
          return 'ERROR: Please enter a valid color';
        }
    }
    },
    {
      type: 'input',
      message: 'What color should the SVG shape be?',
      name: 'svgColor',
      validate: (svgColor) => {
        if (svgColor.length != 0) {
          return true;
        } else {
          
          return 'ERROR: Please enter a valid color';
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



//Inquirer function: asks questions and renders shapes accordingly
function init() {
  inquirer.prompt(questions)
  .then((response) =>  
 createSVG(response));
}
//Initializes the app when called
init();

