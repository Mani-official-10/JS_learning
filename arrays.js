const myarray = [1,2,3,4,5,6, true , "Manish"];
// A datatype in which multiple datatype can be stored inside the squre brcts 


// myarray.push("Vamika");  **** add the value in last of the Array.
// myarray.pop();  ******** delete the last index value 
// myarray.shift();  ******** Delete the first value from the array
// myarray.unshift(4); ******** add the value in the starting of the array


// console.log(myarray);
// console.log(myarray.includes(9));
// console.log(myarray.indexOf(true));
// console.log(myarray);

// const myarr = myarray.join();
// console.log(myarr);
// console.log(typeof myarr);

// console.log("A",myarray);
// console.log(myarray.slice(1,3));  ******* slice prints the new array start from index 1 and exclude index 3 without maipulating the original array. 
// console.log("B",myarray);
// console.log(myarray.splice(1,3));  ****** splice prints the new array starts from index 1 and also include index 3 but it manipulate the original array and cut the splaiced values.
// console.log("C",myarray);

// const marvel_heroes = ["Thor","Ironman","Spideman"]
// const dc_heroes = ["Superman","Aquaman","Batman"]

// const all_heroes = marvel_heroes.concat(dc_heroes);  ***** to add two arrays together in one new array
// console.log(all_heroes);

// const all_new_heroes = [...all_heroes,...dc_heroes];
// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,8,9,[10,11]];

const spread_another_array = another_array.flat(2);
console.log(spread_another_array);