/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const name = 'Anzhelika'

const surname = 'Madzhara'

const prof = 'Acounter'

const presentation = 'My name is ' + name + ' ' + surname + ' and my profesion is ' + prof
const presentation2 = `My name is ${name} ${surname} and my profesion is ${prof}`

console.log(presentation)
console.log(presentation2)

