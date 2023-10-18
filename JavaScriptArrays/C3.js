//slice()
var l1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//         0   1   2   3   4   5   6   7   8    9  
//        -10  -9  -8  -7 -6  -5  -4  -3  -2   -1
console.log(l1)
console.log(l1.slice(2))
console.log(l1.slice(4))
console.log(l1.slice(6))

console.log(l1.slice(2, 6))
console.log(l1.slice(4, 20))

console.log(l1.slice(-1))
console.log(l1.slice(-8, -4))

