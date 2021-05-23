/**
Demonstrates:
1. JavaScript is asynchronous -> meaning JS does not execute code line by line in a sequence
(E.g., if a line has static wait, JS does not wait for the static wait to complete and proceeds with the next line of code)
2. Hoisting - All objects are declared first before initialized with a value. https://www.w3schools.com/js/js_hoisting.asp
 */


const firstMethod = () => console.log('1')

const secondMethod = () => {
    setTimeout(() => {
        console.log('2')
    }, 5)
}

const thirdMethod = () => console.log('3')

;(
    function fourthMethod() {
        console.log('4')
    }
)()

let globalObject = 5
console.log(globalObject)


firstMethod()
secondMethod()
thirdMethod()
