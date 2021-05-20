// Demonstrates usage of class in JavaScript
// See Main.mjs file where this class is used

class DemoClass {

    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    add() {
        return this.firstNumber + this.secondNumber;
    }

    subtract() {
        return this.firstNumber - this.secondNumber;
    }
}

export default DemoClass
