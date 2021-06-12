const fs = require('fs')
// const data = require('./data.json')

fs.readFile('./data.json', 'utf-8', (err, data) => {
    let arr = []
    let currentData = JSON.parse(data)
    let newData = {
        name: ""
    }

    for (let i = 0; i < currentData.length; i++) {
        arr.push(currentData[i])
    }

    arr.push(newData)
    console.log(arr);

    fs.writeFileSync('./data.json', JSON.stringify(arr))

})

fs.writeFileSync('./data.json', JSON.stringify(data))


