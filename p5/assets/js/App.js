const nav = document.querySelector("#nav");
const icon = document.querySelector("#menuIcon");
icon.addEventListener('click', ()=>{
nav.classList.toggle('active');
icon.classList.toggle('active');
})
