class Rectangle {
    
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
console.log("\n");



class Person {

    constructor(firstName, lastName, Age, Email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
        this.Email = Email;
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.Age} email: ${this.Email})`;
    }
}


let person = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(person.toString());
console.log("\n");


(function GetPerson() {
    person = [
        new Person('Maria', 'Petterson', 22, 'mp@gmail.com'),
        new Person('Lexicon'),
        new Person('Stefan', 'Larsson', 25),
        new Person('Peter', 'Johnson', 24, 'ptr@live.com')
    ];

    person.forEach(element => {
        console.log(element.toString());
    });
})();




class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(diamater) {
        this.radius = diamater / 2;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);
console.log("\n");
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);
console.log("\n");


class PointDistance {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {

        return Math.sqrt(Math.pow((b.x - a.x),2) + Math.pow((b.y - a.y),2));
    }
}
let p1 = new PointDistance(5, 5);
let p2 = new PointDistance(9, 8);
console.log(PointDistance.distance(p1, p2));
console.log("\n");
