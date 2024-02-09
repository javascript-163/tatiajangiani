//  exercise2 

 class shape {
    constructor(name) {
        this.name = name
    }


    area() {
        "return Area calculation not implemented for generic shape."
    }
}

// exercise3

class circle extends shape {

constructor(name, radius) {
    this.name = name
    this.radius = radius
}
area() {
    return `area is ${Math.PI * this.radius * this.radius}`;
}
}


class Rectangle extends Shape {
    constructor(name, width, height) {
      this.name = name;
      this.width = width;
      this.height = height;
    }
  
    area() {
      return `Area is ${this.width * this.height}`;
    }
  }

  class Triangle extends shape {
    constructor(name, base, height) {
        this.name = name;
        this.base = base;
        this.height = height;
    }

    area() {
        return `area is ${(this.base * this.height) / 2}`;
    }
  }



//   exercise4 

let circle = new Circle("Circle", 1);
let rect = new Rectangle("Rectangle", 2, );
let triangle = new Triangle("Triangle", 4, 5);
console.log(area());


  