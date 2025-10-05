const nums = {
    2: 'Второй',
    1: 'Первый',
    3: 'Третий'
}

for (const num in nums) {
    console.log(nums[num])
}

const obj1 = {
    name: 'Александр',
    age: 28
}


const obj2 = {
    name: 'Александр',
    age: 28
}

const areObjectsEqual = (object1, object2) => {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    console.log('Длина keys1:', keys1.length)
    console.log('Длина keys2:', keys2.length)
    
    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key in object1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }

    return true
}

console.log('Равны ли объекты obj1 и obj2:',
    areObjectsEqual(obj1, obj2)
)


const obj3 = {
    name: 'Александр',
    age: 28,
    address: {
        city: 'Москва',
        zipcode: 123456
    }
}


const obj4 = {
    name: 'Александр',
    age: 28,
    address: {
        city: 'Москва',
        zipcode: 123456
    }
}


const areObjectsEqual2 = (object1, object2) => {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    console.log('Длина keys1:', keys1.length)
    console.log('Длина keys2:', keys2.length)
    
    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key in object1) {
        const value1 = object1[key]
        const value2 = object2[key]
        const areValueObjects = 
            typeof value1 === 'object' && typeof value2 === 'object'
        
        if (areValueObjects) {
            return areValueObjects(value1, value2)
        }

        if (value1 !== value2) {
            return false
        }
    }

    return true
}

const obj5 = {name: 'Александр'}
const obg6 = {age: 28}

const user5 = Object.assign({}, obj5, obg6) // создает независимую копию других объектов

console.log('user:', user5)

