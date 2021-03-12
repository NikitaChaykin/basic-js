
/**
 * 
 * @param {Array<Array>} matrix 
 */
module.exports = function countCats( matrix ) {
    if(!matrix.length) return false
    
    let number = 0
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === '^^') {
                number++
            }
        }
    }

    return number
};
