
class VigenereCipheringMachine {
    arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    constructor(reverse) {
        if (reverse === undefined) {
            this.reverse = true
        } else {
            this.reverse = reverse
        }
        this.square = this.generateSquare()
    }

    generateSquare() {    
        let str = []
        for(let i = 0; i < this.arr.length; i++) {
            if(i === 0) {
                str.push(this.arr.split('').slice(i))
            } else {
                let beforeStr = this.arr.slice(0, i)
                let afterStr = this.arr.slice(i)

                str.push((afterStr + beforeStr).split('')) 
            }
        }

        return str
    }

    generateRepeatKey(message, key){
        let messKey = ''
        let i = 0
        let j = 0
        while(messKey.length !== message.length) {
            if(i === key.length) {
                i = 0
            }
            if(message[j] === ' ') {
                messKey += ' '
                i--
            } else {
                messKey += key[i].toUpperCase()
            }

            i++
            j++
        }

        return messKey
    }

    createObjArr() {
        let subArr = this.arr.split('')
        
        subArr = subArr.reduce((acc, cur, i) => {
            acc[cur] = i       
            return acc
        }, {})

        return subArr
    }

    encrypt(message, key) {
        if(!message || !key) throw new Error("ERROr")

        let subArr = this.createObjArr()
        let messKey = this.generateRepeatKey(message, key)

        let res = ''
        for(let i = 0; i < messKey.length; i++) {
            if(subArr[message[i].toUpperCase()] !== undefined && subArr[messKey[i].toUpperCase()] !== undefined) {
                let indexI = subArr[message[i].toUpperCase()]
                let indexJ = subArr[messKey[i].toUpperCase()]
                
                res += this.square[indexI][indexJ]
            } else {
                res += message[i]
            }
        }

        if (!this.reverse) res = res.split('').reverse().join('')
        
        return res.toUpperCase()
    }    

    decrypt(encryptedMessage, key) {
        if(!encryptedMessage || !key) throw new Error("ERROr")
        let subArr = this.createObjArr()
        let messKey = this.generateRepeatKey(encryptedMessage, key)

        let res = ''
        for(let i = 0; i < messKey.length; i++) {
            if(subArr[messKey[i].toUpperCase()] !== undefined && subArr[encryptedMessage[i].toUpperCase()] !== undefined) {

                let indexI = subArr[messKey[i].toUpperCase()]
                let indexJ = this.square[indexI].indexOf(encryptedMessage[i])

                res += this.arr[indexJ]
            } else {
                res += encryptedMessage[i]
            }
            
        }

        if (!this.reverse) {
            return res.split('').reverse().join('').toUpperCase()
        }

        return res.toUpperCase()
    }
}


module.exports = VigenereCipheringMachine;
