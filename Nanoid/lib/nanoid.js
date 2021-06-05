//โจทย์ก็คือ ให้ทำการเขียน lib / nanoid โดยการสุ่ม ตัวอักษร สามารถรับตัวแปร คำนำหน้าได้ และกรณีไม่มีคำนำหน้า ให้เป็น SA_ ดังเดิม
//รวมถึงสามารถแสดงความยาวของการสุ่มได้ด้วยเช่นกัน โดยฟังก์ชันสุ่มมีสองแบบ 1.สุ่มตัวเลข และความยาว 2.สุ่มตัวอักษรและความยาว
module.exports = class nanoid {
    constructor(max, tag) {
        this.max = max
        this.tag = tag
    }
    genNumberID() {
        let result = ''
        for (let i = 0; i < this.max; i++) {
            result += Math.floor(Math.random() * 10)
        }
        return (
            `${this.tag}_${result}`
        )
    }
    genID() {
        const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        let result = ''
        for (let i = 0; i < this.max; i++) {
            result += char.charAt(Math.floor(Math.random() * char.length))
        }
        return (
            `${this.tag}_${result}`
        )
    }
}
