// const calculator = {
//     read() {
//         this.a = +(prompt('Введите первое число:', 0)) // использование унарного оператора + преобразует текст в число либо же через Number
//         this.b = +(prompt('Введите второе число:', 0))
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// calculator.read()
// console.log('calculator:', calculator)
// console.log('Сумма:', calculator.sum())
// console.log('Произведение:', calculator.mul())



let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep() { // показывает текущую ступеньку
    console.log( 'Текущая ступенька', this.step );
    return this
  }
};


ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep(); // показывает 1 затем 0
