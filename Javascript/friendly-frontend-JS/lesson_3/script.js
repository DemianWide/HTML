console.log(
    typeof Number('123')
)

console.log(typeof +('123'))  // + это оператор унарного плюса преобразует строку в число

console.log(
    '3' + '5'
)

console.log(
    +'3' +  +'5'
)

const result = 1 + -2 - 3 * +'4' / 5 ** 2

/*  Последовательность выполнения вычисления:

    1 + -2 - 3 * 4 / 5 ** 2
    1 + -2 - 3 * 4 / 25
    1 + -2 - 12 / 25
    1 + -2 - 0.48
    -1 - 0.48
    -1.48

*/

console.log(result)


let count = 1 

count += 2 // значение увеличится на 2 и будет равно 3

let count2 = 10

count2--
console.log(count2)

let count3 = 10

count3++
console.log(count3)

let count4 = 10
let newCount = ++count

console.log(count)
console.log(newCount)


let newCount2 = count++

console.log(newCount2)

// операторы сравнения 
console.log( 5 == 5)
console.log( 5 != 5)

