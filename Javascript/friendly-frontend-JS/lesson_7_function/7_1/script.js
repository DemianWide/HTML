function logHello() {
    console.log('Привет')
}

logHello()

const message = 'Привет'

function logMessage() {
    console.log(message)
}

logMessage()

function logMessage2(message2, count2) {
    for(let i = 0; i<count2; i++) {
        console.log(message2)
    }
}

logMessage2('Привет', 3)
logMessage2('Пока', 2)