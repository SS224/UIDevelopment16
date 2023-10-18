//indexOf() and lastIndexOf()
l1 = [10, 20, 30, 40, 10, 60, 10, 80, 90, 100]
//     0   1   2   3   4   5   6   7   8    9 
console.log(l1.indexOf(10)) // 0
console.log(l1.lastIndexOf(10)) 
console.log(l1.indexOf(10, 3))

//concat
l1 = [10, 20]
l2 = [30, 40] 
console.log(l1.concat(l2))

console.log(l1.concat([100, 200]))

//isArray() 
l1 = [10, 20]
console.log(Array.isArray(l1))
l2 = "NameOne"
console.log(Array.isArray(l2))

//sort()
l1 = [20, 10, 40, 30, 50]
console.log(l1.sort())
console.log(l1.reverse())
