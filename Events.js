document.getElementById('leaf').addEventListener('click',function(e){
        alert("leaf image clicked")
},false)

// what to study..??

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY ,screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// Event Propagation 

// Bubbling ----> bottom to top

// document.getElementById('Ganesh').addEventListener('click',function(e){
//         alert("Ganesh ji image clicked")
// },false)


// document.getElementById('images').addEventListener('click',function(e){
//         alert(" Image  inside the UL clicked")
//          e.stopPropagation()
// },false)

// Capturing --> top to bottom

// document.getElementById('Ganesh').addEventListener('click',function(e){
//         alert("Ganesh ji image clicked")
// },true)


// document.getElementById('images').addEventListener('click',function(e){
//         alert(" Image  inside the UL clicked")
// },true)


// document.getElementById('google').addEventListener('click', function (e) {
//     e.preventDefault()
//     e.stopPropagation()
//     alert('google clicked')
// })

// Remove the images project using Event listener


// document.querySelector('#images').addEventListener('click', function(e){
//         if (e.target.tagName === "IMG") {
//             let removeIt = e.target.parentNode
//             removeIt.remove();
//         }
// })