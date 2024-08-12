// const accountid = "1";
// const ACCOUNTID = "1";node
// const accountId = "1";
// const Accountid = "1";

// all are valid variable names 

const accountId = 1234;
let accountEmail = "mani1993gusain@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";

// accountId = 54321;
accountEmail = "ronakrawat71@gmail.com";
accountPassword = "54321";
accountCity = "Hyderabad";
console.log(accountId); 
// ----------------------> not allowed to redeclare the const variable.


/*
Prefer not to use "var" variable decleration becoz of the scope issue in it.
always use "let" insist of "var"
*/
let accountState;
/*
varibale without the value is print with the "undefined" value.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

console.log("hello ! world");

