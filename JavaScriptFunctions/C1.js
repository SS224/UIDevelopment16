var userName = "Sai Kiran"
var password = "admin"
console.log(userName, password)
console.log(userName, password)
console.log(userName, password)
console.log(userName, password)

//function without args
function userDetails(){
    console.log("userDetails function invoked")
}

userDetails()

//function with args
function userDetails1(uName, pWord){
    console.log("User Name is " + uName, "User Name is " + pWord)
}

userDetails1("Sai Kiran", 'admin')
userDetails1("Sai Kumar", 'admin')
userDetails1("Sai Ram", 'admin')
userDetails1("Sai krishna", 'admin')

//function using return keywod
function userDetails2(uName, pWord){
   return "User Name is " + uName, "User Name is" + pWord
}
console.log(userDetails2("Vamsi", 'admin'))
