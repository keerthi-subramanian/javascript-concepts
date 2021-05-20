/*
Demonstrates use of Promises
 */

const first = () => new Promise((success) => {
    setTimeout(() => {
        console.log(1);
        success();
    }, 2000);
});

first()
    .then(() => console.log(2))
    .then(() => new Promise(pass =>
        setTimeout(() => {
                console.log(3);
                pass()
            }, 1000
        )
    ))
    .catch(() => new Error('Error caught at last !'));
