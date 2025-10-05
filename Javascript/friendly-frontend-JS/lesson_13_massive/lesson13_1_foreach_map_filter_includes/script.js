const data = ['Александр', 28]
const [name, age] = data
console.log('name:', name)
console.log('age:', age)

const letters = ['А', 'Б', 'В', 'Г', 'Д'] // это массив
letters.forEach((letter, i, array) => {  // перебор элементов массива по порядку
    console.log(`По индексу [${i}] находится элемент "${letter}"`)
    console.log('array:', array)
})

const prices = [100, 200, 444, 500, 444, 777]
console.log(prices.indexOf(444) !== -1)  // поиск определенного элемента массива
console.log(prices.indexOf(444, 3)) // поиск с определенного индекса

const users = [
    {
        names: 'Александр',
        age: 28
    },
    {
        names: 'Михаил',
        age: 30
    },
    {
        names: 'Василий',
        age: 40
    }
]

console.log(
    users.findIndex((element, index, array) => {
    if (element.names === 'Василий') {
        return true
    }
}))

console.log(
    users.findIndex((user) => user.names === 'Василий')
)

const prices2 = [100, 200, 444, 500, 444, 777]
console.log(prices.includes(500)) // если найдет вернет true или false



const users2 = [
    {
        names: 'Александр',
        age: 28
    },
    {
        names: 'Михаил',
        age: 30
    },
    {
        names: 'Василий',
        age: 40
    },
    {
        names: 'Василий',
        age: 50
    }
    
]

console.log(
    users2.some((user) => user.names === 'Василий') // проверка на соответсвие условия хотя бы одного элемента массива
)
console.log(
    users2.every((user) => user.age >= 18) // если при переборе каждого массива все будут true если чтото не будет выполняться условие то false
)
console.log(
    users2.find((user) => user.names === 'Василий' ) // поиск конктретного элемента массива
)
console.log(
    users2.filter((user) => user.names === 'Василий' ) // поиск скольких угодно элементов с таким именем
)



const users3 = [
    {
        names: 'Александр',
        age: 28,
        city: 'Москва'
    },
    {
        names: 'Михаил',
        age: 30,
        city: 'Екатеринбург'
    },
    {
        names: 'Василий',
        age: 40,
        city: 'Москва'
    },
    {
        names: 'Василий',
        age: 50,
        city: 'Санкт-Петербург'
    }
   
]

const filteredUsers = users3.filter((user) => {
    return user.city === 'Москва' || user.age < 45 // так мы отфильтровали чтобы значение в city была Москва или возраст был до 45
})

console.log(filteredUsers)


const users4 = [
    {
        names: 'Александр',
        age: 28,
        city: 'Москва'
    },
    {
        names: 'Михаил',
        age: 30,
        city: 'Екатеринбург'
    },
    {
        names: 'Василий',
        age: 40,
        city: 'Москва'
    },
    {
        names: 'Василий',
        age: 50,
        city: 'Санкт-Петербург'
    }
   
]

const usersFormatted = users4.map((user) => { // на каждой итерации происходит возврат нового элемента
    return `${user.names}, ${user.age} лет, живет в г. ${user.city}`
})

console.log(usersFormatted)