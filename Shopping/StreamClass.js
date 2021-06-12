const fs = require('fs')
module.exports.WriteFile = (product, price, amount) => fs.readFile('./data.json', 'utf8', (err, data) => {
    try {
        let currentData = JSON.parse(data)
        if (typeof currentData != 'object') return 'Error'
        let newData = { Product: product, Price: price, Amount: amount }
        currentData.push(newData)
        fs.writeFileSync('./data.json', JSON.stringify(currentData))
    } catch (error) {
        return error
    }
})

module.exports.DeleteData = (DeleteData) => fs.readFile('./data.json', 'utf8', (err, data) => {
    try {
        let currentData = JSON.parse(data)
        if (typeof currentData != 'object') return 'Error'
        let index = currentData.findIndex(item => item.Product == DeleteData)
        if (index > -1) {
            currentData.splice(index, 1)
        }
        console.log(currentData);
        fs.writeFileSync('./data.json', JSON.stringify(currentData))
        console.log("Delete Success!")
        console.log("Product Now", currentData)
    } catch (error) {
        return error
    }
})


module.exports.SellProduct = (product, amount) => fs.readFile('./data.json', 'utf8', (err, data) => {
    try {
        let currentData = JSON.parse(data)
        if (typeof currentData != 'object') return 'Error'
        let index = currentData.findIndex(item => item.Product == product)
        let currentAmount = currentData[index].Amount
        let newAmount = currentAmount - amount
        if (newAmount <= 10) {
            console.log(`Sorry amount of ${product} is to low, Please update your stock`);
        } else {
            let obj = { Product: product, Price: currentData[index].Price, Amount: newAmount }
            if (index > -1) {
                currentData.splice(index, 1)
                currentData.push(obj)
            }
            let sum = amount * currentData[index].Price
            fs.writeFileSync('./data.json', JSON.stringify(currentData))
            console.log("Sell Succes!")
            console.log(`Total Price : ${sum} ฿`);
            console.log("Product Now", currentData)
        }
    } catch (error) {
        return error
    }
})
module.exports.UpdateStock = (product, price, amount) => fs.readFile('./data.json', 'utf8', (err, data) => {
    try {
        let currentData = JSON.parse(data)
        if (typeof currentData != 'object') return 'Error'
        let index = currentData.findIndex(item => item.Product == product)
        let currentAmount = currentData[index].Amount
        let newAmount = currentAmount + amount
        if (newAmount <= 10) {
            console.log(`Sorry amount of ${product} is to low, Please update your stock`);
        } else {
            let obj = { Product: product, Price: price, Amount: newAmount }
            if (index > -1) {
                currentData.splice(index, 1)
                currentData.push(obj)
            }
            console.log(currentData);
            fs.writeFileSync('./data.json', JSON.stringify(currentData))
            console.log("Update Stock  Succes!")
            console.log(obj);
            console.log("Product Now", currentData)
        }

    } catch (error) {
        return error
    }
})




module.exports.ReadFile = require('./data.json')