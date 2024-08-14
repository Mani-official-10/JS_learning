// const tinderUser = new Object();
// this is a singleton object


const tinderUser = {};

tinderUser.name = "Manish";
tinderUser.id = "a2345";
tinderUser.Sex = "Male";
tinderUser.IsLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
    email : "user@gmail.com",
    id : "23456",
    name : {
        fullName :{
            firstName : "Manish",
            LastName : "Gusain",
        }
    }
}

// console.log(regularUser.name.fullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {obj1,obj2};   /*        wrong way of merge the multiple objects in one object. */
const obj4 = Object.assign(obj1,obj2)
const obj5 = Object.assign({},obj1,obj2)   /* just to make sure the returns the object  */
// console.log(obj4);
// console.log(obj5);

console.log(Object.keys(tinderUser));  /* prints the keys in array format */
console.log(tinderUser.hasOwnProperty("IsLoggedIn"));


