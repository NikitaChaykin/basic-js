

module.exports = function transform(arr) {
    
    if(arr.constructor !== Array) throw 'ERROR'

    const temp = arr.slice()

    const config = {
        '--discard-next': (i) => {
            if(temp[i + 1] !== undefined) {
                temp.splice(i + 1, 1)
                return i--
            }
        },
        '--discard-prev': (i) => {
            if(temp[i - 1] !== undefined) {
                temp.splice(i - 1, 1)
                return i--
            }
        },
        '--double-next': (i) => {
            if(temp[i + 1] !== undefined) {
                temp.splice(i, 1, temp[i + 1])
            }

        },
        '--double-prev': (i) => {
           if(temp[i - 1] !== undefined) {
                temp.splice(i, 1, temp[i - 1])
            }

        }
    }

    for(let i = 0; i < temp.length; i++) {
        if(config[temp[i]]) {
            config[temp[i]](i)
        }
    }

    for(let i = 0; i < temp.length; i++) {
        if(config[temp[i]]) {
            temp.splice(i, 1)
            i--
        }
    }

    return temp
}



