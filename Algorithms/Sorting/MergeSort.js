import { performance } from 'perf_hooks'

export default class MergeSort {
    mergeSort(array) {
        if(array.length <= 1)
            return array;
    
        let mid = Math.floor(array.length / 2)
        
        let left = this.mergeSort(array.slice(0, mid))
        let right = this.mergeSort(array.slice(mid))
    
        return this.merge(left, right)
    }

    merge(left, right) {
        let merged = []
    
        while(left.length && right.length) {
            merged.push(
                (left[0] < right[0]) ? left.shift() : right.shift()
            )
        }
    
        return merged.concat(left.slice().concat(right.slice()))
    }

    mergeSortWithPerformance(array) {
        var obj = { original: [...array] }
        
        var t0 = performance.now()
        this.mergeSort(array, 0, array.length - 1)
        var t1 = performance.now()
        
        obj.sorted = array        
        obj.performance = `${t1 - t0} ms`

        return obj
    }
}