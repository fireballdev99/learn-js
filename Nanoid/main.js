const fs = require('fs')

const Run = (username, password) => {
    const readUser = fs.readFileSync('./Data/user.json', 'utf8');
    const users = JSON.parse(readUser)

    const readSubject = (type) => fs.readFile(`./Data/${type}.json`, 'utf8', (err, data) => {
        let datas = JSON.parse(data)
        let subject = datas.map(item => "Subject :" + item.subject + "(" + item.subid + ")"
        );
        return console.log(subject);

    });
    let usernames = username;
    let passwords = password;
    let role = ""
    let name = ""
    let isValid = null;
    let isStudent = null;
    let type = ""
    users.map(item => {
        if (usernames == item.username && passwords == item.password) {
            isValid = true;
            name = item.name
            if (item.type === "student") {
                isStudent = true;
                type = "s-sublist"
                role = "Student"
            } else {
                type = "t-sublist"
                role = "Teacher"
            }
        }
    })
    if (isValid) {
        console.log(`Hello ${name}`);
        console.log(`You are ${role}`);
        console.log('Your Subject is');
        if (isStudent) {
            readSubject(type)
        } else {
            readSubject(type)
        }
    } else {
        console.log("Username or Password is novalid Please try again");
    }


}
Run("st01", "password")