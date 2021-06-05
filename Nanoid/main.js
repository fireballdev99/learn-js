//โจทย์ก็คือ ให้ทำการเขียน lib / nanoid โดยการสุ่ม ตัวอักษร สามารถรับตัวแปร คำนำหน้าได้ และกรณีไม่มีคำนำหน้า ให้เป็น SA_ ดังเดิม
//รวมถึงสามารถแสดงความยาวของการสุ่มได้ด้วยเช่นกัน โดยฟังก์ชันสุ่มมีสองแบบ 1.สุ่มตัวเลข และความยาว 2.สุ่มตัวอักษรและความยาว



// fs.readFile('./data.json', 'utf8', (err, data) => {
//     let ulogin = "admins";
//     // let plogin = "password";
//     let datas = JSON.parse(data)
//     datas.map(item => {
//         if (ulogin == item.username) {
//             console.log('มีข้อมูล');
//         } else {
//             console.log('ไม่มี');
//         }
//     })



//     // console.log(datas)
// })

const fs = require('fs')

const readssub = () => {
    return (
        fs.readFile('./Data/s-sublist.json', 'utf8', (err, data) => {
            let datas = JSON.parse(data)
            let result = (datas.map(item => {
                return ("Subject :" + item.subject + "(" + item.subid + ")")
            }));

            console.log(result);

        })
    )

}

const readtsub = () => {
    return (
        fs.readFile('./Data/t-sublist.json', 'utf8', (err, data) => {
            let datas = JSON.parse(data)
            let result = (datas.map(item => {
                return ("Subject :" + item.subject + "(" + item.subid + ")")
            }));

            console.log(result);

        })
    )

}



const readuser = (username, password) => {
    let usernames = username;
    let passwords = password;
    let isValid = null;
    let isStudent = null;
    fs.readFile('./Data/user.json', 'utf8', (err, data) => {
        let datas = JSON.parse(data)
        datas.map(item => {
            if (usernames == item.username && passwords == item.password) {
                isValid = true;
                if (item.type == "student") {
                    isStudent = true
                } else {
                    isStudent = false;
                }
            }
        })
        if (isValid) {
            if (isStudent) {
                console.log("Subject of Student");
                readssub();
            } else {

                console.log("Subject of Teacher");
                readtsub();
            }
        } else {
            console.log("Username or Password invalid");
        }
    })
}

readuser("teacher1", "password")



