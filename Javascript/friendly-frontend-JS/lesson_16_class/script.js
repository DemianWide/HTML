class Student {
    planet = 'Земля'
    country = 'Россия'
    region

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    logAge() {
        console.log(this.age)
    }

    set city(value) {
        const firstLetter = value[0].toUpperCase()
        const fromSecondLetter = value.slice(1).toLowerCase()
        this._city = `${firstLetter}${fromSecondLetter}`
    }
    get city() {
        return `Г. ${this._city}`
    }

    #someSecretAction() {  //приватный класс не позволяет получить к ней доступ из вне

    }
}

const firstStudent = new Student('Вася', 25)
const secondStudent = new Student('Петя', 18)

console.log('firstStudent:', firstStudent)
console.log('secondStudent', secondStudent)

console.log('Имя первого студента:', firstStudent.name)
console.log('Имя второго студента:', secondStudent.name)

firstStudent.logAge()
secondStudent.logAge()

firstStudent.city = 'москва'
console.log(firstStudent.city)

console.log('Страна:', firstStudent.country)


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    
    eat() {console.log('Ем...')}
    sleep() {console.log('Сплю...')}
}

const examplePerson = new Person('Василий', 30)

class Developer extends Person {
    constructor(name, age, experience) {
        super(name, age)
        this.experience = experience
    }
    writeCode() {console.log('Пишу код...')}
    sleep() {
        console.log('Не хочу спать пойду допишу код...')
        this.writeCode()
    }
}

class JavaScriptDeveloper extends Developer {
    makeFrontend() {
        console.log('Пишу фронтенд...')
    }

    eat() {
        super.eat()
        console.log('Смотрю ютуб...')
    } 
}

const exampleDeveloper = new Developer('Михаил', 25)
exampleDeveloper.writeCode()
exampleDeveloper.eat()


const developerExample = new Developer('Миша', 25, 5)


class Ork {
    planet = 'Земля'
    range = 0
    health = 100
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    attack() {
        target = this.name 
        this.fight = 100 - hp
        console.log( `Цель ${target} нападаю на него и отнимаю ${hp} и у него осталось ${this.fight}`)
    }
}


ogr = new Ork('Петя', 25)
ogr.attack( 25)
