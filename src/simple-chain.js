const CustomError = require("../extensions/custom-error");

const chainMaker = {
    str: [],

    getLength() {
        return this.str.length
    },
    addLink(value = '') {
        value === '' ? this.str.push('( )') : this.str.push(`( ${value} )`)
        return this
    },

    removeLink(position) {
        if(isNaN(+position) || position == '' || this.str[position] === undefined) {
            this.str = []
            throw 'ERRor'
        }

        this.str.splice(position - 1, 1)
        return this
    },
    reverseChain() {
        this.str.reverse()
        return this
    },
    finishChain() {
        const res = this.str.join('~~');
        this.str = []
        return res
    }
};

module.exports = chainMaker;






