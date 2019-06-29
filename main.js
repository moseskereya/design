
let slideStatus = 0;

function showSlides() {
  var moses= document.getElementsByClassName("mySlides");
  for (i = 0; i < moses.length; i++) {
    moses[i].style.display = "none"; 
  }
 
  slideStatus++;
  if (slideStatus > moses.length) {slideStatus= 1} 
  moses[slideStatus-1].style.display = "block"; 
  setTimeout(showSlides, 5000); 
}
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
showSlides();

const mydocs = document.querySelector('.modal');
const mybutton = document.querySelector('.myButton')
const close = document.querySelector('.close')
mybutton.addEventListener('click', function(){
    mydocs.style.display = 'block';
})

close.onclick = function(){
mydocs.style.display = 'none';
}
const mydoc = document.querySelector('.div1');
const button = document.querySelector('.Button')
const open = document.querySelector('.open')
button.addEventListener('click', function(){
    mydoc.style.display = 'block';
})

open.onclick = function(){
mydoc.style.display = 'none';
}
