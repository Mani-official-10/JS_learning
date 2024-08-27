const mynum = [1,2,3,4,5,6,7,8,9,10];

// const newnum = mynum.filter((num)=>{
//     return num > 4;
// })

// console.log(newnum);


// another way of returning the above values with forEach loop

// const nums = [];
// mynum.forEach((num) => {
//     if (num > 4) {
//         nums.push(num)
//     }    
// });

// console.log(nums);

// Both ways are correct , at the end values should return correct.

// chaining method

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = numbers
//                 .map((num)=> num *10)
//                 .map((num)=> num +10)
//                 .filter((num)=> num >=40 );

//                 console.log(newNums);
                
// reduce 

// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const myTotal = myNums.reduce((acc , currval)=> acc + currval ,0);
// console.log(myTotal);

// Shpooing cart example

// const shoppingCart = [
//     {
//         coursename : 'JS',
//         Price : 299
//     },
//     {
//         coursename : 'CSS',
//         Price : 599
//     },
//     {
//         coursename : 'Data Scientist',
//         Price : 1299
//     },
//     {
//         coursename : 'English Speaking',
//         Price : 399
//     }
// ]

// const shopTotal = shoppingCart.reduce( (acc ,item)=> acc + item.Price, 0)
// console.log(shopTotal);
