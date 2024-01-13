const button = {
    name: 'Radio button',
    color: 'Black',
    weight: 10
}
console.log(button)

button.color = 'Pink'
console.log(button)

const simpleButton = {
    ...button,
    name: 'Simpe button',
    color: 'White'
}
console.log(button, simpleButton)

button.color = 'Green'
console.log(button, simpleButton)

//button.name = "why"

const newButton = {
    name: 'New button',
    ...button,
    //color: 'Black'
}
button.name = "why"
console.log(button, simpleButton, newButton)

//newButton.name = 'New button'
console.log(button, simpleButton, newButton)

//console.table(newButton)
