// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
let menu=document.getElementById('navigation')
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menu.classList.toggle('visible');
});

let menu_item = document.querySelectorAll('.menu-item');
for (const item of menu_item) {
  item.addEventListener('click',()=>{
    hamburger.classList.toggle("is-active");
    menu.classList.toggle('visible');
  })
}