//Imports shape objects from the shapes.js file
const {Circle, Square, Triangle} = require('./shapes.js');

describe('Circle', () => {
    test('Should return a circle svg element', () => {
        const circle = new Circle();
        let color = 'red';
        expect(circle.render(color)).toBe('<circle cx="50%" cy="50%" r="100" height="100" width="100" fill="red"/>');
    });
});

describe('Square', () => {
    test('Should return a square svg element', () => {
        const square = new Square();
        let color = 'red';
        expect(square.render(color)).toBe(`<rect x="50" height="200" width="200" fill="red"/>`);
    });
});

describe('Triangle', () => {
    test('Should return a triangle svg element', () => {
        const triangle = new Triangle();
        let color = 'red';
        expect(triangle.render(color)).toBe(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="red"/>`);
    });
});