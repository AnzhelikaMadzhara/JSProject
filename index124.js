const somePost ={
    title: 'some post',
    body: 'some body of post'
}


const newPost = (post = {titele:'Title', body: 'Body'}, addedAt= Date()) => ({
    ...post,
    addedAt,
})

let obj = newPost()
console.log(obj)

const firstPost = {
    id:1,
    author:'Bogd'
}
let b = newPost(firstPost)
console.log(b)

const asD = newPost(firstPost)
console.table(asD)

const birthD = (post, dateB=Date()) => ({
    ...post,
    dateB,
    any: 'any'
})

const birthD2 = (post, dateB=Date() ) => {

    const temp = {
        ...post,
        date: dateB,
        any: 'any'
    }

    temp.id +=1
    return temp
}

console.log(birthD2(firstPost))
///console.log()