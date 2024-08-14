const myarray = [1,2,3,4,5,6, true , "Manish"];
// A datatype in which multiple datatype can be stored inside the squre brcts 
// Arrays create the shallow copies rather then the deep copies.

// const arr = new Array(1,2,3,4,5,6); 
// to construct the array.

myarray.push("Vamika");               /* **** add the value in last of the Array.*/
myarray.pop();                        /* ******** delete the last index value */
myarray.shift();                      /* ******** Delete the first value from the array */
myarray.unshift(4);                   /* ******** add the value in the starting of the array */


console.log(myarray);
console.log(myarray.includes(9));     /*checks for the included value in array */
console.log(myarray.indexOf(true));   /*checks for the index of desired value in array */      
console.log(myarray);

const myarr = myarray.join();          /* join the arrays and convert it into the string */
console.log(myarr);                    /* default array */                         
console.log(typeof myarr);             /* string */

/* splice & slice */
/*   const myarray = [1,2,3,4,5,6, true , "Manish"]; */
console.log("A",myarray);
console.log(myarray.slice(1,3)); /* ******* slice prints the new array start from index 1 and exclude index 3 without maipulating the original array. */
console.log("B",myarray);


console.log(myarray.splice(1,3)); /* ****** splice prints the new array starts from index 1 and also include index 3 but it manipulate the original array and cut the spliced values.*/
console.log("C",myarray);

const marvel_heroes = ["Thor","Ironman","Spideman"]
const dc_heroes = ["Superman","Aquaman","Batman"]

const all_heroes = marvel_heroes.concat(dc_heroes); /* ***** to add two arrays together in new array*/
console.log(all_heroes);

const all_new_heroes = [...all_heroes,...dc_heroes];  /* spread operator works same as concat but mostly used when we need to add more then 2 arrays */
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,8,9,[10,11]];

const spread_another_array = another_array.flat(2);
console.log(spread_another_array);

console.log(Array.isArray("manish"));              /* check for the array */
console.log(Array.from("manish"));                 /* convert to array from string */
console.log(Array.from({name:"manish"}));          /* empty array returned */

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));