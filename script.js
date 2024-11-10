window.onload=function(){
const logdiv=document.getElementById("log");
const  finish=document.getElementById("finish");
const  start=document.getElementById("startbtn");
const stop=document.getElementById("stopbtn");

start.addEventListener('click',()=>{
document.addEventListener("keydown",handledown);
document.addEventListener("keyup",handleup);
});
stop.addEventListener('click',()=>{
        document.removeEventListener("keydown",handledown);
        document.removeEventListener("keyup",handleup);
        logdiv.textContent=" ";
        finish.textContent=" ";
    });
 function handledown(e){
    logdiv.textContent=`key ${e.key} pressed down`;
    finish.textContent=`key is down`;
 }
 function handleup(e){
    logdiv.textContent=`key  is  released`;
    finish.textContent=`key is up`;
 }
}