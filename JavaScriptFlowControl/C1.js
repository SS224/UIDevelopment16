//Types of Statements
//Selection Statemnets if, else, else if, switch
//Iteration Statements for, while, do-while 
//Transfer Statements break, continue

//unreachable code / dead code
if(true){
    console.log("If condition")
}else{
    console.log("Else condition")
}

if(false){
    console.log("If condition")
}else{
    console.log("Else condition")
}

userName = "Admin"
userPassword = "Admins"

if(userName == "Admin" && userPassword == "Admin"){
    console.log("Login Success")
}else{
    console.log("Login Failure")
}

var userSalary = 10000
if(userSalary > 40000){
    console.log("Tax Deduct")
}else{
    console.log("No Tax Deduct")
}
