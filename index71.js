'use strict'

let a
let b = 6

function myFn() {
    let b = 5
    a = true
    console.log(b)
}

myFn()
console.log(a)
console.log(b)
