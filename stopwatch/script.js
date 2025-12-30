const display = document.querySelector("#display");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
let state = "idle";
let starttime =0;
let elaspedtime=0;
let timer=null;

function time(ms){
    const minute = Math.floor(ms/60000);
    const seconds = Math.floor((ms%60000)/1000);
    const miliseconds = ms%1000;
    display.textContent = `${String(minute).padStart(2,0)}:`+`${String(seconds).padStart(2,0)}:`+`${String(miliseconds).padStart(3,0)}`;
};
time(30000);
start.addEventListener("click",function(){
    
});