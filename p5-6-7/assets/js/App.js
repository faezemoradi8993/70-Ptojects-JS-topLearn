const nav = document.querySelector("#nav");
const icon = document.querySelector("#menuIcon");
const bar = document.querySelector('.progress-bar');
const header=document.querySelector('header');

const totop = document.querySelector('.totop');
window.addEventListener('scroll', function () {
    // progress bar 
    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = `${scrolled}%`;
    //totop
    if (winScroll > 200 && !icon.classList.contains('active')) {
        totop.classList.add("active");
    
    } 
    else {
        totop.classList.remove("active");

    }
})
// menu
icon.addEventListener('click', ()=>{
nav.classList.toggle('active');
icon.classList.toggle('active');
header.classList.toggle('active');
totop.classList.remove("active");
})