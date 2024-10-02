console.log(Math.PI);
Math.PI = 4;
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math , "PI");

// console.log(descriptor);

 const chai = {
    name:"Black tea",
    price: 250,
    isAvaliable: true
 }

 console.log(Object.getOwnPropertyDescriptor(chai , "price"));
 
 Object.defineProperty(chai , "price",{
     writable:false
    });
    
    console.log(Object.getOwnPropertyDescriptor(chai , "price"));
