import { performance } from 'perf_hooks'

var recursionTimes = 0;

export default class HeapSort {
    arrayLength = 0

    heapRoot(array, i) {
        recursionTimes ++;

        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;

        if (left < this.arrayLength && array[left] > array[max]) {
            max = left;
        }

        if (right < this.arrayLength && array[right] > array[max]) {
            max = right;
        }

        if (max != i) {
            this.swap(array, i, max);
            this.heapRoot(array, max);
        }
    }

    swap(array, i, j) {
        var temp = array[i];

        array[i] = array[j];
        array[j] = temp;
    }

    heapSort(array) {
        this.arrayLength = array.length;

        for (var i = Math.floor(this.arrayLength / 2); i >= 0; i -= 1) {
            this.heapRoot(array, i);
        }

        for (i = array.length - 1; i > 0; i--) {
            this.swap(array, 0, i);
            this.arrayLength--;


            this.heapRoot(array, 0);
        }
    }

    heapSortWithPerformance(array) {
        recursionTimes = 0

        var obj = { original: [...array] }
        
        var t0 = performance.now()
        this.heapSort(array, 0, array.length - 1)
        var t1 = performance.now()
        
        obj.sorted = array        
        obj.performance = `${t1 - t0} ms`

        return obj
    }
}