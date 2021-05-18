        
const btn = document.querySelector('.btn');              
const input = document.querySelector('input');              
const search = document.querySelector('.search');  
btn.addEventListener('click', function (){
input.classList.toggle('active');
btn.classList.toggle('active');
input.focus();
})  ;          