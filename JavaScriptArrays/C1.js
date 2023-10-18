//Arrays
var l1 = [10, 20, 30, 40, 50, 60, 70, 80]
//         0   1   2   3   4   5   6   7
console.log(l1)
console.log(l1.length)

//Calling using index positions
console.log(l1[0]) // 10
console.log(l1[2]) // 30
console.log(l1[4]) // 50
console.log(l1[20]) // undefined

//Iterables
for (var i = 0; i < l1.length; i++){
    console.log(l1[i])
}
