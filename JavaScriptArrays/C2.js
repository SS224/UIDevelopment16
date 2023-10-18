//Array Methods

//indexof(element)
var l1 = [10,20,30,40,50]
//         0  1  2  3  4
console.log(l1.indexOf(10)) // 0
console.log(l1.indexOf(30)) // 2
console.log(l1.indexOf(80)) // -1

//includes
var l1 = [10,20,30,40,50]
console.log(l1.includes(10))
console.log(l1.includes(30))
console.log(l1.includes(50))
console.log(l1.includes(80))

//pop()
var l1 = [10,20,30,40,50]
console.log(l1.pop())
console.log(l1)
console.log(l1.pop())
console.log(l1)

//push()
var l1 = [10,20,30,40,50]
console.log(l1.push(100))
console.log(l1)

//shift()
var l1 = [10,20,30,40,50]
console.log(l1.shift())
console.log(l1)

//unshift()
var l1 = [10,20,30,40,50]
console.log(l1.unshift(100))
console.log(l1)