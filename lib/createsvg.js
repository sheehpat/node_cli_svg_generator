// Packages needed
const { Circle, Triangle, Square} = require('./shapes.js');
const fs = require('fs');

//Takes responses from inquirer and creates a new object from the shapes.js
function createSVG(response) {
    let logoShape;
switch (response.svgShape) {
    case 'circle':
        logoShape = new Circle();
        break;
    case 'triangle':
        logoShape = new Triangle();
        break;
    case 'square':
        logoShape = new Square();
        break;

}
//Creates the svg with all user inputs
    fs.writeFile('./logo.svg',
    
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    ${logoShape.render(response.svgColor)}
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.svgText}</text>
    
    </svg>` , 
    (err) => err ? console.error(err) : console.log('Generated logo.svg!')) 
  }
//Allows createSVG to be imported by other files
module.exports = createSVG;