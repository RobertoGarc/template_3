// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
let menu=document.getElementById('navigation')
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menu.classList.toggle('visible');
});