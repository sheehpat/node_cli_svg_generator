const {Circle, Square, Triangle} = require('./shapes.js');

describe('Circle', () => {
    test('should return a circle svg element', () => {
        const circle = new Circle();
        let color = 'red';
        circle.setColor(color);
        expect(circle.render()).toBe('<circle cx="50%" cy="50%" r="100" height="100" width="100" fill="red">');
    });
});

describe('Square', () => {
    test('Should return a square svg element', () => {
        const square = new Square();
        let color = 'red';
        square.setColor(color);
        expect(square.render()).toBe(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

describe('Triangle', () => {
    test('Should return a triangle svg element', () => {
        const triangle = new Triangle();
        let color = 'red';
        triangle.setColor(color);
        expect(triangle.render()).toBe(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});