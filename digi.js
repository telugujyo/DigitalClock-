let d = document.getElementById("display")
let d1 = document.getElementById("display1")
// d.style.marginLeft="50%"

let date = new Date();
let hours = date.getHours();
let mints = date.getMinutes();
let sec = date.getSeconds();
console.log(sec)
console.log(mints)
console.log(hours)
console.log(date)

let a = setInterval(()=>{
    let date = new Date();
let hours = date.getHours();
let mints = date.getMinutes();
let sec = date.getSeconds();
d.innerHTML=`${hours}:${mints}:${sec}`
console.log(sec)
console.log(mints)
console.log(hours)
console.log(date)

},1000)

let b = setInterval(()=>{
    let date = new Date().toLocaleTimeString();

    d1.innerHTML=`${date}`

console.log(date)

},1000)