console.log('this глобальный', this) //можно получить всю информацию по функциям используемым и неиспользуемым
const user = {
    name: 'Александр',
    age: 28,
    logThis: function() { // с помощью => мы будем ссылаться на глобальный this и поэтому у нас будет window а не то что в функции 
                          // чтобы такого не было нужно обращаться через function() или же просто logThis() {} без двуеточий
        console.log('this в теле метода объекта user:', this)
        console.log('this.name:', this.name)
    },
    address: {
        city: 'Москва',
        zipcode: 123456,
        logInnerThis: function() {
            console.log('this в теле метода объекта address', this)
        }
}
}

user.logThis()
user.address.logInnerThis()



const user1 = {name: 'Миша'}
const user2 = {name: 'Вася'}

function logInfo() {
    console.log('this', this)
    console.log('this.name', this.name)
}

logInfo()

user1.logName = logInfo
user2.logName = logInfo

user1.logName()
user2.logName()