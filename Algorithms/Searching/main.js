import LinearSearch from './LinearSearch.js'
import BinarySearch from './BinarySearch.js'
import QuickSort from '../Sorting/QuickSort.js'

var arraysForSearching = [
    [
        4862, 4181, 346, 4245, 6148, 9992, 2386, 1362, 9237, 5940, 1416, 2329, 1237, 5127, 1541, 9791, 3366, 4314,
        6136, 9592, 7844, 7750, 7227, 2924, 1639, 670, 3212, 8178, 4998, 6488, 3685, 3369, 2832, 2598, 4070, 732,
        7620, 7589, 7127, 1866, 1552, 8492, 3718, 9475, 277, 8388, 355, 4676, 8461, 6145, 5281, 7966, 3786, 4943,
        1089, 385, 5130, 9719, 6207, 316, 4651, 5434, 9908, 8445, 3699, 9224, 1962, 8977, 7568, 5904, 7141, 6734,
        6837, 7147, 1008, 5760, 425, 6934, 2109, 8843, 6622, 5961, 9316, 858, 5110, 7254, 9346, 473, 9968, 9846,
        2239, 5119, 9664, 6, 3386, 2915, 6809, 6866, 3505, 9167
    ],
    [
        7340, 9815, 6760, 2488, 8712, 5365, 2697, 1087, 4456, 4701, 5350, 8396, 5720, 5088, 195, 625, 7668, 4672,
        7172, 9056, 8514, 4454, 4785, 8542, 7437, 4453, 9891, 7690, 9716, 2350, 3051, 968, 3195, 8263, 7875, 6753,
        7111, 7870, 8464, 7112, 1268, 9608, 9005, 2452, 4942, 2951, 7901, 3777, 9454, 6040, 4566, 1454, 8847, 99,
        4850, 4706, 305, 887, 4896, 3386, 8094, 2103, 7500, 421, 6530, 1784, 3621, 3981, 5342, 2574, 742, 2686,
        533, 3592, 4230, 2285, 4750, 7128, 1739, 6754, 4975, 9735, 4999, 846, 596, 8019, 326, 30, 1103, 8393, 8654,
        6210, 6734, 4076, 7380, 4211, 5396, 1114, 2417, 4945
    ],
    [
        100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76,
        75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51,
        50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26,
        25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    ]
]

var keysLinear = [316, 2103, 1]
var binaryPositions = [59, 61, 99]

var searchings = {
    linearSearch: [],
    binarySearch: []
}

searchings.linearSearch = arraysForSearching.map((it, index) => {
    return {
        case: index + 1,
        results: new LinearSearch().linearSearchWithPerformance(it, keysLinear[index])
    }
})

var sorted = arraysForSearching.map(it => new QuickSort().quickSortWithPerformance(it).sorted)

searchings.binarySearch = sorted.map((it, index) => {
    return {
        case: index + 1,
        results: new BinarySearch().binarySearchWithPerformance(it, it[binaryPositions[index]])
    }
})

console.group('LinearSearch')
searchings.linearSearch.forEach(it => console.log(it))
console.groupEnd()

console.group('BinarySearch')
searchings.binarySearch.forEach(it => console.log(it))
console.groupEnd()