import { performance } from 'perf_hooks'

// Recursive fibo - Brute Force 2^n
function fib(n) {
    if(n <= 1)
        return 1;
    else
        return fib(n - 1) + fib(n - 2);
}

// Limit
var n = 45

// Get performance of rec fibo
var t0 = performance.now()
console.log(`Recursive fib: ${fib(n)}`)
var t1 = performance.now()
console.log(`Took ${t1 - t0} ms\n`)


// Get performance of dynamic fibo
var t0 = performance.now()

// DS creation
var array = new Array(n + 1).fill(null)

// Base case
array[0] = array[1] = 1

// Recursion to Iteration
for(let i = 2; i <= n; i++)
    array[i] = array[i - 1] + array[i - 2]

console.log(`Dynamic fibo: ${array[n]}`)
var t1 = performance.now()
console.log(`Took ${t1 - t0} ms\n`)