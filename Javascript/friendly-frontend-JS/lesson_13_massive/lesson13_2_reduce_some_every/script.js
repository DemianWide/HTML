const users = [
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
// метод поиска среднего возраста через цикл for
let ageSum = 0
for (i = 0; i < users.length; i++) {
  ageSum += users[i].age
}
console.log (
  'Средний возраст пользователей:',
  ageSum / users.length
)

//метод поиска среднего возраста через reduce
const ageSum2 = users.reduce((sum, user, /*index, array*/) => { // в поле sum у нас на данный момент 0 далее будем приплюсовывать к нему значение из user и возвращать
  return sum + user.age // c помощью reduce можно обойтись без for он также переберет вксь массив но без создания переменных
}, 0)

const ageSum3 = users.reduce((sum, {age}, /*index, array*/) =>  sum + age, 0) // тут мы воспользовались деструктурированием кода обратились сразу к age чтобы не писать лишние переменные

console.log (
  'Средний возраст пользователей:',
  ageSum2 / users.length
)

console.log (
  'Средний возраст пользователей:',
  ageSum3 / users.length
)

const reversedUsers = [...users].reverse()
console.log(users)
console.log(reversedUsers)
// данные два метода сверху и снизу: reverse, sort мутируют исходный массив чтобы этого не допускать нужно создавать копию при создании переменной в скобках [...names]
const names = ['Василий', 'Александр', 'Максим', 'Андрей']
const sortedNames = [...names].sort()
console.log(sortedNames)

const numbers = [0,4,500]
const sortedNumbers = [...numbers].sort((a, b) => a - b)
console.log('Отсортированные числа:', sortedNumbers)