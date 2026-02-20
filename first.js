let random = document.querySelector(".randombtn");
let apply = document.querySelector(".applybtn");
let middle = document.querySelector("#mid");
let spa = document.querySelector(".spa");
let container = document.querySelector(".container");
let body=document.querySelector("body");

const changecolor=(color)=>{
   body.style.backgroundColor=color;
   spa.textContent = color;
}

const applyfun=()=>{
 let colo=middle.value;
 changecolor(colo);
}

const ran=['red','yellow','green','pink','orange','aqua','blue','magenta','brown'];
const generatecolor=()=>{
   const generate = Math.floor(Math.random() * ran.length);
   return changecolor(ran[generate]);
}



apply.addEventListener('click',applyfun);
random.addEventListener('click', generatecolor);