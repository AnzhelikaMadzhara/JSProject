const myCity = {
    city: 'New York'
}
myCity['popular'] = true
console.log(myCity)

const countryPropertyName = 'country'
myCity.people= 100
myCity[countryPropertyName]= 'Lviv'

console.log(myCity)

const herCity = {
    city: 'OOH',
    info: {
        population: true,
        country: 'USA'
    }
}
console.log(herCity)
console.log(herCity.info.country)

delete herCity.city
console.log(herCity)

delete herCity.info['country']
console.log(herCity)

const name ='Bogdan'
const postsQty = 23
const userProfile ={
    name: name,
    postsQty: postsQty,
    hasAgreem: false
}
console.log(userProfile)



const hisCity = {
    city: 'Lviv',
    cityGreeting: function () {
       console.log('Hello Bogya')
    }
}

hisCity.cityGreeting()

const hereCity = {
    city: 'Paris',
    cityGreetings () {
        console.log('Hello Baby')
    }
}
hereCity.cityGreetings ()
console.log(hereCity.city)