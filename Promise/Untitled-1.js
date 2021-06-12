
const loop = (x) => {
    let sum = 0;
    for (let i = 0; i < x; i++) {
        sum += i
    }
    return sum
}



const f1 = (num) => {
    return new Promise((resolve, reject) => {
        resolve(loop(num))
    })
}
const f2 = (num) => {
    return new Promise((resolve, reject) => {
        resolve(loop(num))

    })
}
const f3 = (num) => {
    return new Promise((resolve, reject) => {
        resolve(loop(num))

    })
}
const f4 = (num) => {
    return new Promise((resolve, reject) => {
        resolve(loop(num))

    })
}
Promise.all([
    f1(10),
    f2(50),
    f3(5),
    f4(4)
]).then((data) => {
    console.log(data);
    let total = 0
    data.map(item => {
        total += item
    })
    console.log(`Total Sum : ${total}`);
})