/**
Demonstrates the use of class in JavaScript
'.mjs' file extension denotes that ECMAScript module system is used to communicate with other modules. Use of 'export' and 'import' keywords
'.js' or '.cjs' extenstion means that the Node engine with use the CommonJS module system which is using the 'require' keyword
 */

import DemoClass from "./DemoClass.mjs";

const calculate = new DemoClass(1, 2)
const additionOfTwoNumbers = calculate.add()
const subtractionOfTwoNumbers = calculate.subtract()

console.log(`Addition: ${additionOfTwoNumbers}`)
console.log(`Subtraction: ${subtractionOfTwoNumbers}`)
