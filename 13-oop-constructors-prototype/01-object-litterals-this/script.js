const rectangle = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
    area: function() {
        return this.width * this.height
    }
}

const rectangl2 = {
    name: 'Rectangle 2',
    width: 10,
    height: 10,
    area: function() {
        return this.width * this.height
    }
}

// Point faible des objet literal

console.log(rectangle.area());