const bar = document.querySelector('.progress-bar');

const totop = document.querySelector('.totop');
window.addEventListener('scroll', function () {
    // progress bar 
    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = `${scrolled}%`;
    //totop
    if (winScroll > 200) {
        totop.classList.add("active");

    } 
    else {
        totop.classList.remove("active");

    }
})