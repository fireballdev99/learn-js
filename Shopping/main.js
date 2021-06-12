// const CarClass = require('./CarClass')
const ShopingClass = require('./ShopingClass')
const print_f = (data) => {
    console.log(data)
}
const main = (menu, product, price, amount) => {
    let products = product;
    let prices = price;
    let amounts = amount;
    switch (menu) {
        case 1:
            console.log("Add Menu");
            print_f(ShopingClass.AddProducts('Pork', 200, 20))
            break;
        case 2:
            console.log("View Menu");
            print_f(ShopingClass.View())
            break;
        case 3:

            ShopingClass.Sell(products, amounts)
            break;
        case 4:
            ShopingClass.Update(products, prices, amounts)
            break;
        default:
            console.log("Default");
    }

    // CarClass.name = 'Toyata'
    // CarClass.year = '1998'
    // const SubCars = new CarClass.SubCar()
    // print_f(SubCars.subNameField())


    // print_f(ShopingClass.Delete('Chicken'))
}
let add = 1
let view = 2
let sell = 3
let update = 4
// method , Product Name , Price , Amount
main(update, "Beef", 300, 200)

// console.log(SubCars2.subNameField())