const userAge = Number(prompt('Сколько тебе лет?'))  //вызывает всплювающее окошко с текстом и полем ввода
console.log(`Возраст: ${userAge}`)

if (userAge === 0) {
    console.log('Такого возраста не может быть')
} else if (isNaN(userAge)) {
    console.log('Введите число')
} else {
    console.log(`Твой возраст: ${userAge}`)
}

const isUserReady = confirm ('Ты готов')  // вывывает окошко с текстом и двумя кнопками ok и cancel грубо говоря окошко подтверждения
                                          // результатом вывода будет булева значение true или false
if (isUserReady) {
    console.log('Начинаем')
} else {
    console.log('Ладно подождем...')
}

const age = +prompt('Сколько тебе лет') // унарный оператор плюс перед переменной преобразует ее тип в переменную

switch (age) {  // альтернатива конструкции if else
    case 0: {
        console.log('Такого возраста не бывает')
        break // прекратит свою работу если будет найдено
    }
    
    case 18: {
        console.log('Не верю покажи паспорт')
        break
    }

    case 1000: {
        console.log('Ты вампир что-ли?')
        break
    }    
    default: {
        console.log(`Твой возраст: ${age}`)
    }
}

const age2 = +prompt('Сколько тебе лет') 

switch (true) {  // альтернатива конструкции if else
    case age2 < 1: {
        console.log('Такого возраста не бывает')
        break // прекратит свою работу если будет найдено
    }
    
    case age2 === 18: {
        console.log('Не верю покажи паспорт')
        break
    }

    case age2 > 0 && age2 <= 125: {
        console.log(`Твой возраст: ${age2}`)
        break
    }

    case age2> 125: {
        console.log('Ты вампир что-ли?')
        break
    }    
    default: {
        console.log('Возраст введен некорректно')
    }
}