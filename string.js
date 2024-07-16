let str1 = "hello";
let str2 = ' world !';
let str3 = "Manish Kumar Gusain"
// console.log(str1+str2);

// backticks ---> modern way of writing the string

// console.log(`Hi my name is ${str3} and i  am printing ${str1 + str2}`);

const gameName = "Manish";

// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("i"));

// const naming = "vamika";

// // const name2 = naming.substring(0,3);

// // console.log(name2);

// const name2 = naming.slice(-5,5)
// console.log(name2);

// const name = "   vamika   ";

// *****Fro triming the sapces in Start or end*************
// console.log(name);
// console.log(name.trim());

// *************For replace the vwlue with another *****************
// const url = "https:/www.manish%20kumar.com"

// console.log(url);
// console.log(url.replace("%20" , "_"));

// *****************for checking the included value *************

const name = "Manish_vamika_gusain";

// console.log(name.includes("vamika"));
// console.log(name.includes("vamikaa"));
// console.log(name.includes("manish"));

// ***************for converting the string to array**************

const newName = (name.split("_"));
console.log(name);
console.log(typeof name);
console.log(typeof newName);
