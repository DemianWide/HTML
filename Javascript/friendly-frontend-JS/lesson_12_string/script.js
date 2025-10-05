const name2 = 'Александр'

console.log(`Длина строки '${name2}':`, name2.length )
console.log(name2[1])
console.log(name2[name2.length - 1]) // получение последнего символа строки
console.log(name2.at(1)) // также получение символа строки
// через метод at мы можем только получить символ но изменить его можно только через []
name2[1] = 'Х'
console.log(name2)

const text = 'КаКоЙтОтЕкСт'

console.log(text.toLocaleUpperCase())
console.log(text.toLocaleLowerCase())

const message = '   Привет    '
const messageFormatted = message.trim() // обрезает пробелы

console.log(`Сообщение ${messageFormatted} имеет длину ${messageFormatted.length} символов`)

const messageFormatted2 = message.trimStart // отсекает пробелы в начале
const messageFormatted3 = message.trimEnd // отсекает пробелы в конце

const message2 = 'Пробуем найти !это выражение! в этом предложении'

console.log(
    message2.indexOf('!это выражение!') //!== -1 вернет false если нету  // возвращает число индекса с которого начинает выражение или буква которую хотим найти если не находится то -1
)

const message3 = 'Привет'

console.log(message3.indexOf('ив', 4))
console.log(message3.includes('ив', 4))
console.log(message3.startsWith('Пр', 0))
console.log(message3.endsWith('ет', 3))

const str = 'JavaScript'
console.log(str.substring(0,4)) //обрезание строки от и до в данном случае от J до a Java 
console.log(str.substring(4,0)) // странная возможность менять местами что может запутать
console.log(str.slice(0,4)) // такой же метод как предыдущий но менять местами от большого к меньшему не дает
console.log(str.slice(-6, -3)) // можно задавать с минусового индекса в обратном порядке
console.log(str.repeat(3)) // повторяет три раза код

const message4 = 'Я изучаю бэкенд, но я еще ничего не знаю про бэкенд'
console.log(
    message4.replace('бэкенд', 'фронтэнд'), // заменяет первое попавшееся выражение на то что мы указали, но остальные такие же выражения не трогает
    message4.replaceAll('бэкенд', 'фронтэнд'), // заменяет все выражения все вхождения
    message4.replace(/бэкенд/gi, 'фронтэнд') // регулярные выражения можно использовать вместот предыдущего all выражение оборачивает в /слэша/
    //  и в конце добавляем символ g если хотим без учета регистра получить то еще добавим i и получим /слэш/gi 

)

const str2 = '+7 (999) 999-99-99'
console.log(
    str2.replace(/\d/g , '#' ) // замена цифр на решетки \d
)

const str3 = 'Привет мир!'
console.log(
    str.split('')
)
// важное упоминание все эти методы не изменяют строку не мутируют строку
// если напишем не через константу const а через let то если походу действия переопределять str= str=... то она измениться но в const переопределять нельзя

const value = prompt('Введите ваше имя:')
const clearValue = value.trim().toLowerCase

if (clearValue.length === 0) {
    alert('Ошибка! Имя не может быть пустым')
}

if (clearValue.includes('админ')) { 
    alert('Ошибка! Вы не можете занять это имя')
}