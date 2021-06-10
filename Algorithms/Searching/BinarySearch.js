export default class BinarySearch {
    binarySearch(array, key) {
        let low = 0
        let high = array.length - 1
    
        while (low <= high) {
            const mid = Math.floor((low + high) / 2)
            const guess = array[mid]
    
            if (guess === key) {
                return mid
            }
    
            if (guess > key) {
                high = mid - 1
            } 
            else {
                low = mid + 1
            }
        }
    
        return null
    }

    binarySearchWithPerformance(array, key) {
        var obj = {}

        var t0 = performance.now()
        obj.foundAt = this.binarySearch(array, key)
        var t1 = performance.now()
        
        obj.performance = `${t1 - t0} ms`

        return obj
    }
}