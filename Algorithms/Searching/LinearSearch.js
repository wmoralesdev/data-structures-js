export default class LinearSearch {
    linearSearch(arr, key){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === key){
                return i
            }
        }
        return -1
    }

    globalLinearSearch(arr, key){
        let results = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === key){
                results.push(i)
            }
        }
        
        return !results ? -1 : resuls
    }

    linearSearchWithPerformance(array, key) {
        var obj = {}

        var t0 = performance.now()
        obj.foundAt = this.linearSearch(array, key)
        var t1 = performance.now()
        
        obj.performance = `${t1 - t0} ms`

        return obj
    }

    globalLinearSearchWithPerformance(array, key) {
        var obj = {}
        
        var t0 = performance.now()
        obj.foundItems = this.globalLinearSearch(array, key)
        var t1 = performance.now()
        
        obj.performance = `${t1 - t0} ms`

        return obj
    }
}