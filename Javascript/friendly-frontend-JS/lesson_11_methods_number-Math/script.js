let num = 100.055

console.log(num.toFixed(1)) // округляет после точки число
console.log(num.toPrecision(4)) // округляет с первого числа в данном случае с 1
console.log(num.toFixed(4))

const num2 = 100

console.log(
    `Число ${num2}  в двоичной системе счисления`,
    num2.toString(2)
)

console.log(Math) // метод math позволяет получить доступ к различным вариантам вычислений, также получение случайного числа и т.д.
console.log(Math.random()) // получаем рандомное число от 0 до 1 с плавающей точкой
console.log(Math.abs(-100)) // преобразует в положительное число
console.log(Math.pow(2, 10))
console.log(Math.sqrt(16)) //получить квадратный корень числа
console.log(Math.cbrt(9)) //получить кубический корень числа
console.log(Math.min(1,2,3,-5,10,1111,100)) //получение минимального числа
console.log(Math.max(1,2,3,-5,10,1111,100)) //получение максимального числа
num = [1,2,3,-5,1111,100] //также вместо набора чисел можно рассчитать в массиве и найти минимальное или максимальное 
console.log(Math.min(...num)) // главное ставить ... перед переменной
console.log(Math.round(3.49)) // округляет число до ближайшего целого
console.log(Math.floor(3.49)) // округляет число вниз до ближайшего целого
console.log(Math.ceil(3.49)) // округление вверх
console.log(Math.trunc(3.49)) // оругляет положительные вверх
console.log(Math.trunc(-3.49)) // а отрицательные вниз

const numberAsString = '100px'
const numberAsString2 = '100.5px'
console.log(Number(numberAsString))
console.log(+numberAsString)
console.log(parseInt(numberAsString)) // распарсивает строку в число если там помимо цифр еще и буквы предыдущие методы не помогут
console.log(parseFloat(numberAsString2)) // распарсивает строку с плавающей точкой