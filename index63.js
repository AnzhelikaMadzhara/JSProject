const personOne = {
    name: 'Bob',
    age: 21
}
function chengeAge(person) {
    person.age += 1
    return person
}
chengeAge(personOne)
console.log(personOne.age)

function newPersAge(person) {
    const updatePerson = Object.assign({},person)
    updatePerson.age += 1
    return updatePerson
}
const updatePerson = newPersAge(personOne)
console.log(updatePerson.age)
console.log(personOne.age)

function printMyName() {
    console.log('Bogdan')
}
console.log('Start')
setTimeout(printMyName, 1000)
