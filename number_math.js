const add = 100;

// console.log(add);
// ***********number constructor*********** used when we need to declare specificaly any specific datatype
const balancce = new Number(400);

// console.log(balancce);
// ******** convert number to string************
// console.log(balancce.toString().length);
// ********** to add decimals *************
// console.log(balancce.toFixed(3));

const anotherNumber = 23.678076;
// *********** to precious the numbers after decimals************
// console.log(anotherNumber.toPrecision(4));

const number = 100000
// ***********to convert number in indian numeric values************
// console.log(number.toLocaleString("en-IN"));

// console.log(Math);
// *****for absolute value********
// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// ********* for round of the value ************
// console.log(Math.round(6.4));
// console.log(Math.round(6.7));

// *********** for maximize the value **********
// console.log(Math.ceil(4.7));
// console.log(Math.ceil(4.3));

// *********for roundof the value to lowest************
// console.log(Math.floor(4.3));
// console.log(Math.floor(4.7));

// *************for min and max************
// console.log(Math.min(2,6,3,9));
// console.log(Math.max(2,6,3,9));

// **********for random values************
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.floor(Math.random()*10)+1));


// *********** for specified range random number ***************
const min = 10;
const max = 20;

// console.log(Math.random(max-min));

// *********** "+1" to avoid the zero value**********
// console.log((Math.random()*(max-min)+1));

// *********** for min value above or equals to 'min' value**************
// console.log(Math.floor((Math.random()*(max-min)+1)+min));

