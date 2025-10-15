function Shape(name) {
    this.name = name;
}

Shape.prototype.logName = function () {
    console.log(`${this.name}`);
}

function Rectangle(name , height , width) {
    Shape.call(this , name)

    this.width = width;
    this.height = height
}

// Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype)

function Circle(name , radius) {
    Shape.call(this , name)

    this.radius = radius;
}

// Set prototype constructors
Rectangle.prototype.contructor = Rectangle
Circle.prototype.contructor = Circle

const rect = new Rectangle('Rectangle 1' , 20 , 20)
const cir = new Circle('Circle 1' , 30)

// console.log(rect);

// rect.logName()
