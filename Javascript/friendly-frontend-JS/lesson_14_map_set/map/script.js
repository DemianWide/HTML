const user = {
    names: 'Александр',
    age: 27,
    city: 'Москва'
}

const userKeys = Object.keys(user) // получаем ключ объекта и далее можно пройтись по всему списку ключей
console.log(userKeys)
userKeys.forEach((key) => {
    console.log('Имя свойства:', key)
})

const userValues = Object.values(user) 
userValues.forEach((value) => {
    console.log('Значение свойства:', value)
})

const userEntries = Object.entries(user) // получаем из объекта массив где у нас будут сразу парами ключ и значение
console.log('userEntries:', userEntries)

userEntries.forEach(([key, value]) =>{ // далее мы сможем отдельно вытянуть ключ и значение
    console.log ('Имя свойства:', key, 'Значение свойства:', value)

})


const userEntriesFormatted = userEntries.map(([key, value]) => {  // мы создаем отдельные массивы и можем их видоизменять
    return [key.toUpperCase(), `~~${value}~~`]
})
console.log(userEntriesFormatted)

const userFormatted = Object.fromEntries(userEntriesFormatted) // делает полностью противоположное действие и возвращает в исходный объект но уже изменненный

console.log(userFormatted)


const data = {}

data[1] = 'Один как число'
data['1'] = 'Один как строка' //Добавляет только последнее значение

console.log(data)

const data2 = new Map()

data2.set(1, 'Один как число') //добавляет ключ значение к объекту map
data2.set('1', 'Один как строка')

console.log(data2.get(1)) //позволяет достать ранее записанное выражение по ключу
console.log(data2.get('1'))

console.log(data2.has('name')) //проверяет есть ли такое значение в массиве
data2.set('name', undefined)
console.log(data2.has('name'))
data2.delete('name') // удаляет ключ и соответсвенно значение из Map
console.log(data2.has('name'))
console.log(data2)
data2.clear() // удаляет всю коллекцию телефон

console.log(data2.size) // показывает количество пар ключ значение в коллекции



const data3 = new Map()
data3.set('name', 'Александр')
data3.set('age', 29)

for (const key of data3.keys()) {
    console.log('keys:', key)
}

for (const value of data3.values()) {
    console.log('values:', value)
}

for (const entry of data3.entries()) {
    console.log('entries:', entry)
}

data3.forEach ((value, key, map) => {
    console.log('ключ', key, 'значени', value, 'коллекция', map)
} )