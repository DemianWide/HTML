const quest1 = {
    name: 'Василий',
    age: 30, 
    orderInfo: {
        roomType: 2,
        stayDates: {
            from: '14.04.2024',
            to: '21.04.2024'
        }
    }
}

const quest2 = {
    name: 'Екатерина',
    age: 25
}

const logGuestInfo = (quest) => {
    console.log(`
        Имя: ${quest.name}
        Возраст: ${quest.age}
        Дата заезда ${quest.orderInfo?.stayDates?.from ?? 'Не указана'}
        Дата выезда: ${quest.orderInfo?.stayDates?.to ?? 'Не указана'}
        `)
}

logGuestInfo(quest1)
logGuestInfo(quest2)

const user = {
    name: 'Александр',
    age: 28,
    isDeveloper: true
}

const {
    name,
    age,
    isDeveloper
} = user

console.log('name:', name )
console.log('age:', age)
console.log('isDeveloper:', isDeveloper)





const logAddress = ({
    city,
    street,
    houseNumber,
    appartmentNumber
}) => {
    console.log(`
        Адрес:
        г. ${city}, ул. ${street},
        д. ${houseNumber}, кв. ${appartmentNumber}
        `)
}

logAddress ({
    city:'Москва',
    street:'Пушкина',
    houseNumber: 21,
    appartmentNumber: 35
})



const user2 = {
    name: 'Александр',
    age: 25,
    city: 'Москва'
}

const user3 = {
    name: 'Александр',
    age: 25,
}


const {city='Не указан'} = user2 // деструктуризация то есть у объекта берется какое-то свойство и это свойство создается в переменную которую потом можно использовать

console.log('Город', city)

const user4 = {
    city: 'Москва'
}

const{ city:usercity = 'не указано'} = user4

console.log('usercity:', usercity)

const logUser = (user) => {
    const {name, age, city, ...otherInfo} = user

    console.log(`
        Имя: ${name}
        Возраст: ${age}
        Город: ${city}
        `)

    console.log('Дополнительная информация', otherInfo)
}

logUser({
    name: 'Даня',
    age: 22,
    city: 'Москва',
    company: 'VK',
    jobPost: 'Главный программист'
})