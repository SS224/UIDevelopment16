//for loop, while loop, do while 
//if we know the iteration in advance we use for loop
//if we dont know know the iteration in advance we use for loop
//if we want the iteration only one time we use do while

for(var i = 0; i < 10;  i++) {
    console.log(i)
}

var i = 0
while(i < 10){
    console.log(i)
    i++
}

var i = 0
do{
    console.log(i)
    // i++
    i+=1
}while(i < 10)

// while(true){
//     console.log("while loop")
// }

do{
    console.log("do while")
}while(true)