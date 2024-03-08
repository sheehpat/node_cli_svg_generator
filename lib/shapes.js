class Shape {
    constructor (version, width, height, xmlns){
        this.version = '1.1',
        this.width = '300',
        this.height = '200',
        this.xmlns = 'http://www.w3.org/2000/svg'
    }
  }

class Circle extends Shape {
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100" width="100" fill="${this.color}">`
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
    
}

class Square extends Shape {
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}

modules.export = { Circle, Triangle, Square }