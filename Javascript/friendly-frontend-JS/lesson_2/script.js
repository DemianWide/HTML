//примитивные типы данных
const name_0 = 'Александр'
const age_0 = 28
const isDeveloper = true
const power = 99999999999999n
const sign = Symbol()
const something = undefined

//специальные типы данных
const user_0 = {
    login: '123',
    password: 'qwerty'
}
const data_0 = null

//строки 
const greeting = 'Привет'
const name = 'Александр'

const message = ` ${greeting}, ${name}! ` //данная конструкция позволяет сложить несколько переменных в данном случае одну строку с другой
console.log(message)

const a = 5
const b = 10
const sum = `Сумма a и b равна ${a + b}` // в этом случае произойдет математическое сложение и будет равно 15 так как здесь используются уже цифры

console.log(sum)

const a1 = '5'
const b1 = '10'
const sum1 = `Сумма a и b равна ${a1 + b1}` // в данном примере мы используем уже строку из чисел они просто соединяться

console.log(sum1)
 
//числа

const posX = 50
const posY = -100
const posZ = 1.55

const point = (posX + posY + posZ) * 2 /posX

console.log(point)

console.log('Слово' / 100)

console.log(100 / 0)

console.log(-100 / 0)

console.log(9900000000000091n + 1n) // чтобы складывать очень большие числа то в конце каждого числа мы ставим букву n это позволяет вычислять без ошибок
console.log(9900000000000091n + 2n)

const number = 1_000_000_000 // можно писать числа через нижнее подчеркивание чтобы было более понятно что за число у нас

//булева

const shouldLearnJs = true
const isAlreadyLate = false

const age = 11
const isChild = age < 18
const isChild2 = age < 10


console.log('возраст меньше', isChild)
console.log('возраст больше', isChild2)

//null

let data = null // спец значение пустое или неизвестное значение в основном используется когда неизвестны данные но вскоре появятся

console.log(data)

//undefined

let nfv //пустое значение выведет undefined

console.log(nfv)

//обЬекты

const user = {         //обЬектами могут быть набор ключ значение, массивы, коллекции map set 
    name2: 'Александр',
    age2: 28,
    isDeveloper: true,

}

const message_1 = 'Привет'

console.log(
    typeof message_1  // показывает тип данных
)


console.log ('16' / '8')


const x  = '10' 
const x1 = Number(x) //преобразование типов данных в данном примере из строки в число
const y = 10

console.log(x + y)
console.log(x1 + y)

console.log(
    Number(false)
)

console.log(
    Number(true)
)

console.log(
    Number(null)
)

console.log(
    Number(undefined)
)