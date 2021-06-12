//ให้ออกแบบ Function loop 4f(x) แต่ละ Loop มีความยาวที่แตกต่างกัน F(1) = 10, F(2)=50 , F(3)=5 ,F(4)=4
//โดยให้เขียนในรูปแบบ Promise แล้วรวมผล SUM ทั้งหมดแต่ละ Loop สุดท้ายเอาเข้าไปรวม Total ใน Promise.all

const main = async () => {

    const setTime = (msec, f) => {
        setTimeout(() => {
            console.log(`Hello ${f}`);
        }, msec)
    }

    const f1 = (timeOut) => {
        new Promise((resolve, reject) => {
            const f = "Function 1"
            resolve(setTime(timeOut, f))
        })
    }
    const f2 = (timeOut) => {
        new Promise((resolve, reject) => {
            const f = "Function 2"
            resolve(setTime(timeOut, f))
        })
    }
    const f3 = (timeOut) => {
        new Promise((resolve, reject) => {
            const f = "Function 3"
            resolve(setTime(timeOut, f))
        })
    }
    const f4 = (timeOut) => {
        new Promise((resolve, reject) => {
            const f = "Function 4"
            resolve(setTime(timeOut, f))
        })
    }

    f1(3000);
    f2(10000);
    f3(1000);
    f4(20000)

}

main()