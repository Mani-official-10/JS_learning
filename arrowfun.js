// const user ={
//     username : "Manish",
//     price: 999,

//     welcomeMessage : function (value) {
//         console.log(`${this.username} , welcome to website`);
        
//     console.log(this);  ----> this will return the current context , as this us inside the local scope
        
//     }
// }

// console.log(user.welcomeMessage());
// user.username = "sam";
// console.log(user.welcomeMessage());

// console.log(this);   ----> this will return a empty object as we are in node environment, and if we console log the this is in browser then this refers to the window object (DOM),


// ******************* Normal function declaration************************************
//  function user() {
//      let username = "Manish";
//      console.log(this);  /*---> this return global object or some properties*/
    
//  }
// console.log(this);  /*---> this return undefined bcoz this can't be used inside function*/
//  user();

//  ************************Arrow function decleration********************************
// const user = () => {
//     let username = "Manish";
//     console.log(this);   --->  this returns empty object

// }
//     console.log(this);   --->  this return undefined bcoz this can't be used inside function
// user();

// Explicite return 

// const add = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(add(3,4));


// implicite return

// const add = (num1,num2) => (num1 + num2);

// console.log(add(3,4));

// Return the object
// const add = (num1,num2) => ({user:"Manish"});  ----> to return object () is must ;

// console.log(add(3,4));


