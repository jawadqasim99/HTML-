const btn   = document.querySelector('.btn');
const nav_header = document.querySelector(".menu") 
btn.addEventListener('click',function() {
   
    this.classList.toggle('is-active'); 
    nav_header.classList.toggle("sm")
   
 });
