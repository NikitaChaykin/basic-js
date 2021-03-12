
module.exports = function createDreamTeam( members ) {
    if(!members) return false
    let temp = []
    for(let i = 0; i < members.length; i++) {
        if(typeof(members[i]) !== 'string') {
            continue
        } else {
            temp.push(members[i].trim().toUpperCase()[0])
        }
    }
    if(!temp.length) return false
    let res = ''

    temp.sort().forEach(key => res += key)

    return res
};       

