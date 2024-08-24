// For in loop


// const myobj ={
//     JS:'javascript',
//     CSS:'cascading style sheet'
// }
 
// for (const key in myobj) {
//     console.log(`${key} is ${myobj[key]}`);
    
// }

// for each loop

const arr = ['js','css','html','react']

// arr.forEach(element => {
//     console.log(element);
    
// });

// arr.forEach( (element,index,arr)=> {
//     console.log(element,index,arr);
    
// });

const obj = [
{
    languageInitial: 'JS',
languageName: 'Javascript'
},

{
    languageInitial: 'CSS',
languageName: 'cascading style sheet'
},

{
    languageInitial: 'CPP',
languageName: 'C++'
},

{
    languageInitial: 'RB',
languageName: 'Ruby'
}
]

obj.forEach( (key) => {
    console.log(key.languageName);
    
})