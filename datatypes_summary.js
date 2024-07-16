/* datatypes divided into 2 types based on how data stored or excess in memory.
 primitive datatypes -> 
 7 types : 
 a. string > "Manish"
 b. number > 31
 c. boolean > true/false
 d. null > standalone value (empty value)
 e. udefined > no value assigned
 f. symbol > make unique 
 g. bigint > bigger numbers or value

 Non-primitive(reference type) ->
 a. Objects > 
 let bio = {
    name:"manish",
    age: 31,
    sex:"male"
 }

 b. functions
 const myfunction = function (){
    console.log("Hello world !");
 }
 
 myfunction();
 
c. array ->
const arr = [shaktimaan , aaryaman , sabu , naagraj]

*/


const id = Symbol("123")
const anotherId = Symbol('123')

// console.log(id === anotherId);

/***********************************Memmory**************************************************/

/*types pf memory
a. stack > primitive datatype

b.heap > non-primitive datatype
*/

// let userone = "Manish Kumar Gusain"

// let usertwo = userone;

//  usertwo = "Nitin Kumar Gusain";

// console.log(userone);
// console.log(usertwo);

let userone = {
    name :"Manish Kumar Gusain",
}

let usertwo = userone;

usertwo.name = "Nitin Kumar Gusain"

console.log(userone);
console.log(usertwo);