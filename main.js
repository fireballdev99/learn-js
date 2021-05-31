//โจทย์ก็คือ ให้ทำการเขียน lib / nanoid โดยการสุ่ม ตัวอักษร สามารถรับตัวแปร คำนำหน้าได้ และกรณีไม่มีคำนำหน้า ให้เป็น SA_ ดังเดิม
//รวมถึงสามารถแสดงความยาวของการสุ่มได้ด้วยเช่นกัน โดยฟังก์ชันสุ่มมีสองแบบ 1.สุ่มตัวเลข และความยาว 2.สุ่มตัวอักษรและความยาว
const Nanoid = require('./lib/nanoid')

// console.log(new Nanoid(20, 'SA').genID());

const genID = (length, tag) => {
    length = length
    tag = tag
    const gen = new Nanoid(length, tag).genID()
    return (
        console.log(gen)
    )
}

const genNumID = (length, tag) => {
    length = length
    tag = tag
    const gen = new Nanoid(length, tag).genNumberID()
    return (
        console.log(gen)
    )
}

genID(20, 'SA')
genNumID(10, 'BE')