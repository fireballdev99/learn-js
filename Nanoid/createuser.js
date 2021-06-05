const fs = require('fs')
const Nanoid = require('./lib/nanoid')

// console.log(new Nanoid(20, 'SA').genID());

const genID = (length, tag) => {
    length = length
    tag = tag
    const gen = new Nanoid(length, tag).genID()
    return (
        gen
    )
}

const genNumID = (length, tag) => {
    length = length
    tag = tag
    const gen = new Nanoid(length, tag).genNumberID()
    return (
        gen
    )
}


fs.readFile('./Data/user.json', 'utf8', (err, data) => {
    let datas = []
    let currentData = JSON.parse(data)
    let newData = {
        id: genNumID(10, 'BE'),
        name: "Teacher4",
        username: "teacher4",
        password: "password",
        type: "teacher"
    }
    currentData.map(item => {
        datas.push(item)
    })

    datas.push(newData)
    console.log(datas);
    fs.writeFileSync('./Data/user.json', JSON.stringify(datas))
})