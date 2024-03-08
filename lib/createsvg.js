// Create a function to write SVG file
const { Circle, Triangle, Square} = require('./shapes.js');
const fs = require('fs');


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
    fs.writeFile('./logo.svg',
    
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    ${logoShape.render(response.svgColor)}
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.svgText}</text>
    
    </svg>` , 
    (err) => err ? console.error(err) : console.log('Generated logo.svg!')) 
  }

module.exports = createSVG;