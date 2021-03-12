const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730

module.exports = function dateSample(sampleActivity) {
    if( typeof (sampleActivity) !== "string" || MODERN_ACTIVITY < sampleActivity || sampleActivity < 0) {
        return false
    }
    const activity = parseFloat(sampleActivity)

    if(!activity) {
        return false
    }
  
    const c = Math.log(MODERN_ACTIVITY / activity)

    return Math.ceil( (c / (Math.log(2)) * HALF_LIFE_PERIOD));
}