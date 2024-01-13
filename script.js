let toggled = false;

let htag = document.getElementsByTagName("h1")[0];

let body = document.getElementsByTagName("body")[0];

let circle = document.getElementById("right");
console.log(circle);

let container = document.getElementById("container");

container.addEventListener("click" , () => {
if(!toggled){
    htag.classList.add("heading");
    body.classList.add("upper");
    circle.classList.add("circleLeft");
    toggled =true;
}else{
    htag.classList.remove("heading");
    body.classList.remove("upper");
    circle.classList.remove("circleLeft");
    toggled=false;
}
});