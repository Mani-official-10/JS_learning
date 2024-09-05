const form = document.querySelector('form');

// console.log(form);

form.addEventListener('submit',function (e) {
    
e.preventDefault();

const height = document.querySelector('.height').value
const weight = document.querySelector('.weight').value
const result = document.querySelector('.result')
const guide1 = document.querySelector('#uw')
const guide2 = document.querySelector('#nr')
const guide3 = document.querySelector('#ow')

if(height === " " ||  height < 0 || isNaN(height)){
    result.innerHTML = "Please provide a valid height";
} else if (weight === " " || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please provide a valid height";    
}else{
    const bmi =( weight / ((height*height)  / 10000)).toFixed(2);
    result.innerHTML = `<span> ${bmi} </span>`;
    if (bmi <= 18.6) {
        guide2.style.display = "none";
        guide3.style.display = "none";
    }
     else if (bmi > 18.6 || bmi < 24.6){
        guide1.style.display = "none";
        guide3.style.display = "none";
    }
     else if (bmi >= 24.6){
        guide2.style.display = "none";
        guide1.style.display = "none";
    }
}
})