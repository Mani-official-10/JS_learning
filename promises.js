// const promiseOne = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         console.log("async is completed");
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// });

new Promise((resolve, reject) => {
    console.log("async is completed");
resolve();    
}).then(function(){
    console.log("promise 2 consumed");
});

const promiseThree = new Promise((resolve, reject) => {
    console.log("async 3 is completed");
    resolve({username:'manish',email:"mani1993gusain@gmail.com"});
})

promiseThree.then(function (user) {
    console.log(user);
    
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            console.log("async 4 is completed");
            resolve({username:'Vamika',age: '1.5yrs'})
        }
        else{
            reject('something went wrong')
        }
    }, 2000);
})
promiseFour
.then(function(user) {
    console.log(user);
    return user.username;
})
.then(function(username) {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
    
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            console.log("async 5 is completed");
            resolve({username:'Javascript',pswd: 1234})
        }
        else{
            reject('JS went wrong')
        }
    }, 2000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }   
}
consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);   
//     }   
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})