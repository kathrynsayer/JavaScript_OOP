console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies = []) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies; 
    }

    addHobby (hobby) {
        this.hobbies.push(hobby)
    }
    greet () {
        console.log("Hello, fellow person")
    }
    removeHobby(nothobby) {
        this.hobbies = this.hobbies.filter((hobby) => hobby != nothobby)
    }
}
let sonny = new Person ("Sonny", 1, "portland", ['skateboarding', 'reading']) 

sonny.removeHobby('skateboarding')

sonny.addHobby('swimming')

sonny.greet()

console.log(sonny)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super (name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer"
    }
greet (name) {
    console.log("Hello, fellow coder!")
}
}
let Kathryn = new Coder ("Kathryn", 1, "Mexico", "surfing")
console.log (Kathryn)
Kathryn.greet ()


 // Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");


class Calculator {
    result = 0;

    add(a, b) {
        if (b === undefined) {
        this.result += a;
        } else {
        this.result = a + b;
        }
        return this.result;
    }

    subtract(a, b) {
        if (b === undefined) {
        this.result -= a;
        } else {
        this.result = a - b;
        }
        return this.result;
    }

    multiply(a, b) {
        if (b === undefined) {
        this.result *= a;
        } else {
        this.result = a * b;
        }
        return this.result;
    }

    divide(a, b) {
        if (b === undefined) {
        this.result /= a;
        } else {
        this.result = a / b;
        }
        return this.result;
    }
    
    clear() {
        this.result = 0;
    }

    displayResult() {
        console.log(this.result);
    }
}

let calculator = new Calculator()

calculator.multiply(4, 2);
calculator.displayResult();
calculator.subtract(3, 2);
calculator.displayResult();
calculator.clear();
calculator.displayResult();








