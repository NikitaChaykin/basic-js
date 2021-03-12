
 module.exports = function repeater(str, options) {

    let addition = options['addition']
    let additSep = options['additionSeparator']
    let additRes = ''

    if((addition || addition === false || addition === null) && options['additionRepeatTimes']) {
        for(let i = 0; i < options['additionRepeatTimes']; i++) {
            if(additSep) {
                additRes += addition + (i !== options['additionRepeatTimes'] - 1 ? additSep : '')
            } else {
                additRes += addition + (i !== options['additionRepeatTimes'] - 1 ? '|' : '')
            }
        }
    } else {
        additRes = addition
    }

    let res = ''
    let sep = options['separator']
    if(options['repeatTimes']) {
        for(let i = 0; i < options['repeatTimes']; i++) {
            if(sep) {
                res += str + (additRes ? additRes : '') + (options['repeatTimes'] - 1 !== i ? sep : '')
            } else {
                res += str + (additRes ? additRes : '') + (options['repeatTimes'] - 1 !== i ? '+' : '')
            }
        }
    } else {
        res = str + additRes
    }

    return res
}
  