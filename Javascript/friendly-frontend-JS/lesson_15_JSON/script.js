const user = 
{
    "name": "Александр",
    "age": 28,
    "city": "Moscow",
    "address": {
        "street": "st.Pushkino, d.1, kv.1",
        "zipcode": 123456
    },
    "todos": ["sleep", "eat", "work", "train", "learn"],
    "hasCat": true,
    "yaCht": null
}

const userDataAsString = JSON.stringify(user)
console.log(userDataAsString)
const parseedUserData = JSON.parse(userDataAsString)
console.log(parseedUserData)