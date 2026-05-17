function time(){
let hour = document.getElementById('hrs');
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let periods = h >= 12 ? "PM":"AM";

if(h>12){
    h = h-12;
}

if (h===0){
    h = 12;
}

h = (h<10)?"0"+h:h
m = (m<10)?"0"+m:m
s = (s<10)?"0"+s:s

hour.innerHTML = h
minutes.innerHTML = m
seconds.innerHTML = s
ampm.innerHTML = periods

}

setInterval(time,1000)