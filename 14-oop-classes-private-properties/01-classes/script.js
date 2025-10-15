class Rectangle {
    constructor(ame , width , height) {
        this.name = name
        this.width = width
        this.height = height
    }

    area(){
        return this.height * this.width
    }

    perimeter(){
        return 2 * (this.width + this.height)
    }

    isSquare(){
        return this.width === this.height
    }

    logArea(){
        console.log('The Rectangle Area : '+this.area());
    }
}

const square = new Rectangle('Square' , 10 , 10)
console.log(square);
square.logArea()