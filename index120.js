const lite = function (a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
console.log(lite(3, 5))



setTimeout(function () {
    console.log('BBB', 1000)
})