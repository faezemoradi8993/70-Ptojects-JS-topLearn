const container=document.querySelector(".container");
console.log(container);


window.onmousemove = function (e){
    let x=e.clientX /3 ;
    let y=e.clientY /3 ;
    container.style.backgroundPositionX= x +"px";
    container.style.backgroundPositionY= y +"px";

}