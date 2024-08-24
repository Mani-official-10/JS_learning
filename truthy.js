const username = "M@manish.ai";

if (username) {
    console.log("Got the email");
    
}else{
    console.log("Didn't got the email");
    
}

// Falsy values

// false , 0 ,-0 , Bigint 0n , "" , null , undefined , NaN;

// Truthy value

//  "0" , " " , "false" , [] , {} , function(){};

const arr = [];

if (arr.length == 0) {
    console.log("array is empty");
    
}

const obj = {};

if (Object.keys(obj).length == 0) {
    console.log("object is empty");
    
}