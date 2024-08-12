/* datatypes divided into 2 types based on how data stored or excess in memory.
 

1)  primitive datatypes ->  (Call by values, provided a copy of data) 7 types : 
      a. string > "Manish"
      b. number > 31
      c. boolean > true/false
      d. null > standalone value (empty value)
      e. udefined > no value assigned
      f. symbol > make unique 
               symbol();
      g. bigint > bigger numbers or value
                  const bigNumber = 2345678876543456n;


2) Non-primitive(reference type) ->
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