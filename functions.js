// const myfun = function(){
//     console.log("Hello, World !");
// }  

// const print = myfun();
//  console.log("Result: " , print);
 
// function is a code writen in a package and used multiple times as per the requirements.

// myfun  reference of the function

// myfun()   execution of the function.

// const myfun = function(){
//     console.log("Hello, World !");
// }  

// const print = myfun();
//  console.log("Result: " , print);

// to return the valne from the function we have to return the vale , as showed in the next function written 

//  const myfun = function(num1 , num2){
//     let Print = num1 + num2;
//     return Print;
// }  

// const Result = myfun(3,4);
//  console.log("Result: " , Result);

// Logging in example

// const isLoggedIn = function(Username) {
//     if (Username=== undefined) {
//         console.log("Please enter your username");
//         return;
//     } else {
//         return `${Username} is just logged in `;
//     }
// }

// const result = isLoggedIn("Manish");
// console.log(result);


// rest operator

// function username (val1,val2 ,...num1){
//     return num1;
// }
// console.log(username(200,300,400,500,2000));

// handling objects in functiions

// const user ={
//     username :"Manish",
//     price : 199
// }

// function handlinObject(anyobject) {
//     console.log(`${anyobject.username} is user and price is ${anyobject.price}`);
// }

// console.log(handlinObject(user));

// Directly passing the object.
// function handlinObject(anyobject) {
//     console.log(`${anyobject.username} is user and price is ${anyobject.price}`);
// }

// console.log(handlinObject({
//     username :"Manish",
//     price : 199
// }
// ));

// Same for the use of function in array

const newArray = [200,300,3000,5000];

function returnthevalue(returnarray) {
    return returnarray[2];
}

console.log(returnthevalue(newArray));

