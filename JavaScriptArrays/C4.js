//splice()
var l1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//         0   1   2   3   4   5   6   7   8    9  
//        -10  -9  -8  -7 -6  -5  -4  -3  -2   -1
console.log(l1)
console.log(l1.splice(3))
console.log(l1) // [ 10, 20, 30 ]

var l1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(l1.splice(3, 2))
console.log(l1)

var l1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(l1.splice(3, 3))
console.log(l1)

var l1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(l1.splice(3, 5, 100, 200, 300, 400, 500))
console.log(l1)

var l1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(l1.splice(3, 5, 100, 200))
console.log(l1)