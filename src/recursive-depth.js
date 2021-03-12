module.exports = class DepthCalculator {
  calculateDepth(arr, step = 1, set = new Set()) {

    set.add(step)
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].constructor === Array) {
            this.calculateDepth(arr[i], step + 1, set)
        }
    }

    return Math.max(...set)
  }
}