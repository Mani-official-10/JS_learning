const date = new Date()

// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);

// const newDate = (new Date(2024, 6 , 15 , 15 ,24,30));
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
// *********for current date **********
let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// **********for convert to seconds from MediaElementAudioSourceNode.************
// console.log(Math.floor(myTimeStamp/1000));

const newDate = new Date();

console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());   
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getUTCDay());git 
// console.log(newDate.getUTCFullYear());

const dates = newDate.toLocaleString("default",{
    weekday: "long",
});

console.log(dates);
