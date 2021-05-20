async function tiger() {
    console.log('In tiger')
    await aTimeOutFunction().then(returned => console.log(returned))
    await cat()
    return 'Javascript is awesome'
}

const aTimeOutFunction = () => new Promise((pass) => {
    setTimeout(() => pass('Inside aTimeOutFunction'), 4000)
});

const cat = async () => {
    await console.log('In cat')
}

tiger().then(resolved => console.log(resolved))
