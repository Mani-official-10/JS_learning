//singleton creates only when declraed with constructor
// objects.creates

// object literals

const mysybl = Symbol("key1");

const jsUser = {
    name: "Manish",
    Age : 31,
    location : "Delhi",
    [mysybl]:"mykey1",
    Email: "manish@google.com",
    isLoggedIn: true,
    loggedDays: ["monday","wednesday"]
};

// ******** syntax to access the objects value ***************
// console.log(jsUser.Email);
// console.log(jsUser["Email"]);
// console.log(jsUser[mysybl]);


jsUser.greeting = function() {
    console.log("hello js users");
};

console.log(jsUser.greeting());

jsUser.greeting2 = function() {
    console.log(`hello js users, ${this.name}`);
};

console.log(jsUser.greeting2());
