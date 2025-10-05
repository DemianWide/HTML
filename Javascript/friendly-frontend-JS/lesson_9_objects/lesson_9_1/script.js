const z = {}    // объявление объекта
const z1 = new Object() 

const user = {
    login: 'iamsuperhero',
    password: 'qwerty',
    'registration-data': '01.01.2024', // если в ключе больше одного слова неважно через пробел или дефис нужно оборачивать в ковычки
    isAdult: true, // можно указывать булевые значения undefined и так далее
    sayHi: () => console.log('Привет')

}

console.log(user['password'])
user.sayHi()


const user2 = {}

user2.name = 'Александр'
user2['is developer'] = true

delete user2.name
delete user2['is developer']

console.log(user2)

const name2 = 'Александр'
const age = 28

const user3 = {
    name: name2,
    age: age
}

console.log(user3)

const propName = prompt ('Свойство с каким значением добавить в объект?')
const propValue = prompt(`Какое значение записать в свойство ${propName}`)

const obj = {
    [propName]: propValue
}

console.log(obj)


const user4 = {
    name: 'Александр',
    age: 28,
    isDeveloper: true,
}

for (const key in user4) {
    console.log(user4[key])
}