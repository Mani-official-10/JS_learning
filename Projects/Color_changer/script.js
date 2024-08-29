const buttons = document.querySelectorAll('.boxes');
// console.log(button);
const body = document.querySelector('.main-container');
// console.log(body);

buttons.forEach(function (button) {
    console.log(button);
    
    button.addEventListener('click',function (e) {
        if (e.target.id === "one") {
            body.style.backgroundColor = "#212131"            
        }
        if (e.target.id === "two") {
            body.style.backgroundColor = "orangered"            
        }
        if (e.target.id === "three") {
            body.style.backgroundColor = "yellowgreen"            
        }
        if (e.target.id === "four") {
            body.style.backgroundColor = "pink"            
        }
    })
});



