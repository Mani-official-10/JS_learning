const randomColor = function (){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i<6; i++ ){
        color += hex[Math.floor(Math.random()*16)];
    }
     return color;
    };
    // console.log(randomColor());
let interval ;
document.querySelector('#start').addEventListener('click', function(){
    interval = setInterval(() => {
        document.body.style.backgroundColor = randomColor()
    }, 1000);;
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(interval)
    interval = null;
})