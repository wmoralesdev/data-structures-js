import { performance } from 'perf_hooks'

var recursionTimes = 0;

export default class QuickSort {
    constructor(array) {
        this.array = array
    }

    quickSort(arr, start, end) {
        recursionTimes++

        if (start >= end) {
            return;
        }
        
        let index = this.partition(arr, start, end);
        
        this.quickSort(arr, start, index - 1);
        this.quickSort(arr, index + 1, end);
    }

    partition(arr, start, end){
        const pivotValue = arr[end];
        let pivotIndex = start; 
        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];

            pivotIndex++;
            }
        }
        
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
        return pivotIndex;
    }

    quickSortWithPerformance(array) {
        recursionTimes = 0

        var obj = { original: [...array] }
        
        var t0 = performance.now()
        this.quickSort(array, 0, array.length - 1)
        var t1 = performance.now()
        
        obj.sorted = array        
        obj.performance = `${t1 - t0} ms`

        return obj
    }
}