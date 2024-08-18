// let a = 10;
// const b = 20;
// var c = 30;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// var is discountinued to use bcoz the redeclartion bug and the scope bug, that means var is accessiblle also from the outside of the bloxk scope and also redeclared without any error and overwrite the declared Value.

// ******************************nested function*******************************************

// insde Function 

function one() {
    let username ="Manish"
    
    function two() {
        let website = "Youtube"
        console.log(username);
    }

    // console.log(website); ---> this throw an error bcoz "website" is not accessible outside the local scope
    two();
}

// one();

//  And as error occured in 28th line then the next code will not execute.
// but after removing the 28th line error removed and rest code executed.

// inside IF


if (true) {
    const username = "Manish";

    if (username === "Manish") {
        const website = " Youtube"
        console.log(username + website);
        
    }
}
