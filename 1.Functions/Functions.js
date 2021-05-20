/**
 * Types of function in JavaScript
 */


// Normal function:
function add(a, b) {
    return a + b
}

const c = add(1, 2)
console.log(`Value of c is ${c}`)





// Arrow function:
addArrowFunction = (i, j) => {
    return i + j
}

const d = addArrowFunction(2, 3)
console.log(`Value of d is ${d}`)





// Immediately invoked function:
;(
    function immediatelyInvokedFunction() {
        const addTwoNumbers = 10 + 20
        console.log(`Value of z is ${addTwoNumbers}`)
    }
)()
