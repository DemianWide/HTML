const globalMessage = 'Привет'

function logMessage(message, count = 4) { // в функции мы задаем параметры которые мы можем потом передать при вызове функции
    messageFormatted = `(((${message})))`

    for (let i = 0; i < count; i++) {
        console.log(messageFormatted)  
        }
}

logMessage(globalMessage, 3)
console.log(globalMessage)

function sum (a, b) {
    return a + b // возвращает результат и можно его записать в переменную
}

const result = sum(100, 12)

console.log(result)


function getAgeType(age) {
    if(typeof age !== 'number') {
        return 'Возраст указан неккоректно'
    }
    if (age < 1 || age > 125) {
        return 'Такого возраста не может быть'
    }
    if (age < 18) {
        return 'Несовершеннолетний'
    }

    return 'Взрослый'
}
console.log(getAgeType('заа'))

function getSecretMessage(name) {
    if (!name) return
    return `0, а я тебя знаю! Ты же тот самый ${name}?`
}

console.log(
    getSecretMessage()
)