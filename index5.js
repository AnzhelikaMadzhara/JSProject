const a = 10
let b = a
console.log(a)
console.log(b)

b=20
console.log(b)

const person = {
    name: 'Anzhe',
    age: 37
}
person.age = 38
person.isAdult = true

console.log(person)
console.log(person.age)
console.log(person.isAdult)

const person2 = person
console.log(person2)
person2.name = 'Taras'
person2.age = 41
person2.isNotAdult = false
console.log(person2)
console.log(person)

const person3 = Object.assign({}, person)
person3.age = 10
person3.isAdult = false
person3.name = 'Ivan'

console.log(person3)
console.log(person)

const person4= {...person}
person4.age = 4
person4.name = 'Baby'

console.log(person3)
console.log(person4)

const person5 = JSON.parse(JSON.stringify(person3))

person5.name = 'Alik'
console.log(person5)
console.log(person3)