const fs = require('fs');
const { array } = require('prop-types');


const Update = (product, amount, price) => fs.readFile('./data.json', 'utf8', (err, data) => {
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
            // fs.writeFileSync('./data.json', JSON.stringify(currentData))
            console.log("Update Stock  Succes!")
            console.log(obj);
            console.log("Product Now", currentData)
        }

    } catch (error) {
        return error
    }
})

Update("Beef", 100, 20)

