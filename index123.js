const lifeTerm = function myFn (a, b) {
    return a * b
}
console.log(lifeTerm(4,25))

const lifeTerm2 = function (a, b=25) {
    return a * b
}
console.log(lifeTerm2(5))

const lifeTerm3 = (a, b=30) => {
    return a * b
}
console.log(lifeTerm3(3))

//(e, g) => {    return e * g}
//console.log(4, 5)