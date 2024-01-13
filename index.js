function a() {
    console.log('Hello')
}
a()
a=10
console.log(a)

const b = () => {
    console.log('CHao!')
}

b()

const myCity = {
    city: 'New York',
    popular: true,
    country:'USA'
}

console.log(myCity)
console.log(myCity.city)
console.log(myCity.country)
console.log(myCity.popular)

myCity.city = 'Uzhgorod'
console.log(myCity)

myCity.people = 100
console.log(myCity)
console.log(myCity.city)

delete myCity.city
console.log(myCity)

myCity['city'] = 'Kiev'
console.log(myCity)