console.log(sum(2, 3))  // функция имеет свойство поднятия или hosting то есть к ней можно обратиться еще до начала написания этой функции
  
function sum(a, b) {
    return a + b
}

function logMessage() {
    console.log('Привет')
}

logMessage()

function logMessage() {
    console.log('Пока')
}

function LogAll() {      
    console.log(arguments)  // функция деклорация с возможностью вызова аргументов которые предоставляют нам массив данных из заявленных параметров
}

LogAll('Привет', 555, false)





// logHello() // и такую функцию нельзя использовать до ее объявления

const logHello = function() {  // функция экспресса мы создаем переменную в которой значение будет уже функция с параметрами и т.д.
    console.log('Привет!')
}
// const logHello = function(){  Такую функцию нельзя переопределить выдаст ошибку
//     console.log('Пока!')      если изначально переменную создавать как let то в дальнейшем можно переименовать
logHello()


const logSum = (a, b) => a + b

console.log(logSum(1, 2))

const doSomething = (num) =>   // так лучше не писать так как становится менее понятно что происходит внутри функции
    num % 2 === 0 ?
    num / 2:
    (num + 1) / 2


const doSomething2 = (num) => {     // такой вариант более приемлем
    const isEven = num % 2 === 0
    return isEven
}

const fn1 = () => {
    return 'Я функция fn1'
}

const fn2 = fn1  // происходит копирование fn1 в fn2 теперь fn2 тоже функция

console.log(fn2())

const logMessage2 = (actionBefore, actionAfter) => {
    actionBefore()
    console.log('Привет')
    actionAfter()
}

const fn11 = () => console.log('before')
const fn22 = () => console.log('after')

logMessage2(fn11, fn22)
logMessage2(
    () => console.log('before'),
    () => console.log('after')
)


const validate = (hasAccess) => {
    // if(hasAccess) {       первый вариант написания но можно упростить
    //     return () => console.log('Доступ разрешен')
    // } else {
    //     return () => console.log('Доступ запрещен')
    // }

    return hasAccess
    ? () => console.log('Доступ разрешен')
    : () => console.log('Доступ запрещен')
}

const logMessage3 = validate(false)

logMessage3()

/**
 * Глаголы префиксы для функций (как называть функции первым словом желательно то есть что мы хотим от нее получить):
 * get - получить какое-то значение
 * set - установить какое-то значение
 * create - создать какое-то значение
 * update - обновить какое-то значение
 * delete - удалить какое-то значение
 * show - показать что-то
 * hide - скрыть что-то
 * search - найти что-то
 * calc - вычислить что-то
 * check - проверить что-то
 */

const getPi = () => 3.14
const setWeather = (weather) => {   }
const createUser = (user) => {  }
const updateUser = (id) => {  }
const deleteUser = (id) => {  }
const showMenu = () => document.querySelector('.menu').classList
const hideMenu = () => document.querySelector('.menu').classList
const searchProducts = (query) => query.fiter(((b)))
const calcSum = (a,b) => a + b
const checkAge = (age) => age > 10