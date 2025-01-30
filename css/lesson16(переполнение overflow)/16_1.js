const boxElement = document.querySelector('.box')
const ButtonElement = document.querySelector('button')

ButtonElement.addEventListener('click', () => {
    boxElement.scrollTop +=10
})