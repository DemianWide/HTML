const year = 2025

if (year === 2024) {
    console.log('Ура')
    console.log('Сейчас  самое подходящее время чтобы изучить Javascript')
} else if (year === 3000) {
    console.log('Слишком поздно нейросеть заменила человечество')
} else {
    console.log('Неизвестный год =/')
}

const message = year === 2024   // Тернарный оператор ? если истина : иной случай
    ? 'Начинаю учиться'  //если год равен 2024 то будет выполняться этот код
    : year === 3000  
        ? 'Нейросети победили' // если год равен 3000 то будет этот
        : 'Неизвестный год' // если иной год то будет выполняться этот код

console.log(message)

console.log(false && false) // false
console.log(true && false) // false
console.log(true && true) //true

const age_0 = 16
const isYoung = age_0 < 18

isYoung && console.log('Покажите паспорт') // еще один вариант оператора но лучше избегать такого и использовать классический if

const name = 'Максим'
const age = 20
const hasMuchMoney = false
const hasGoodJob = false
const hasMotivation = true
const hasFreeTime = true

if (name !== 'Максим') {
    console.log('Вы не Максим, позовите Максима')
} else if (age < 16) {
    console.log('Еще рано думать о взрослой жизни')
} else if (
    !hasMuchMoney ||
    !hasGoodJob ||
     hasMotivation && hasFreeTime) {
    console.log('Максиму нужно учить фронтенд')
} else { 
    console.log (`
        Ты либо безумно богат что можешь не работать до конца жизни,
        либо у тебя и так хорошая работа,
        либо тебе просто это не нужно
    `)
}

const a = null
const b = 100

const resul1 = a || b
const resul2 = a ?? b

 