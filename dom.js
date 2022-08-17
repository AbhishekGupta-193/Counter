var count=document.querySelector('.count');
var increase=document.querySelector('.increase');
var reset=document.querySelector('.reset');
var decrease=document.querySelector('.decrease');

var c=0;
function color(){
if(c>0){
    count.style.color="green";
}
else if(c<0){
    count.style.color="red";

}
else{
    count.style.color="white";

}}
increase.addEventListener('click',increment);
function increment(){
   
    c++;
    count.innerText=c;
    color();
}

reset.addEventListener('click',Reset);
function Reset(){
    c=0;
    count.innerText=c;
    color();

    
}

decrease.addEventListener('click',decrement);
function decrement(){
    c--;
    count.innerText=c;
    color();

    
}

