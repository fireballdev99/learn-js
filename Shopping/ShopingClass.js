const StreamClass = require('./StreamClass')
module.exports = class MyShop {
    static AddProducts(data = '', price = 0, amount = 0) {
        StreamClass.WriteFile(data, price, amount);
        return 'Success'
    }
    static View() {
        return StreamClass.ReadFile
    }
    static Delete(data) {
        return StreamClass.DeleteData(data);
    }
    static Sell(data, amout) {
        return StreamClass.SellProduct(data, amout)
    }
    static Update(data, price, amount) {
        return StreamClass.UpdateStock(data, price, amount)
    }

}