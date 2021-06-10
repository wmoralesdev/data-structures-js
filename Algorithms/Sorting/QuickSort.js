import { performance } from 'perf_hooks'

export default class QuickSort {
    quickSort(array, start, end) {
        if (start >= end) {
            return;
        }
        
        let index = this.partition(array, start, end);
        
        this.quickSort(array, start, index - 1);
        this.quickSort(array, index + 1, end);
    }

    partition(array, start, end){
        const pivotValue = array[end];
        let pivotIndex = start; 
        for (let i = start; i < end; i++) {
            if (array[i] < pivotValue) {
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];

            pivotIndex++;
            }
        }
        
        [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]] 
        return pivotIndex;
    }

    quickSortWithPerformance(array) {
        var obj = { original: [...array] }
        
        var t0 = performance.now()
        this.quickSort(array, 0, array.length - 1)
        var t1 = performance.now()
        
        obj.sorted = array        
        obj.performance = `${t1 - t0} ms`

        return obj
    }
}