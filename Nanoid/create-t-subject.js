const fs = require('fs')


fs.readFile('./Data/t-sublist.json', 'utf8', (err, data) => {
    let datas = []
    let currentData = JSON.parse(data)
    let newData = {
        subject: "Programing 4",
        subid: "CIT106"
    }
    currentData.map(item => {
        datas.push(item)
    })

    datas.push(newData)

    fs.writeFileSync('./Data/t-sublist.json', JSON.stringify(datas))
    console.log("Create");
    console.log(datas);
})