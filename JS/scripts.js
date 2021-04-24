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

const galleryItems=document.querySelectorAll('.gallery-item');
const lightbox=document.getElementById('lightbox');
const lightboxImg=lightbox.querySelector('.lightbox-img');
const lightboxText=lightbox.querySelector('.caption-text');
const lightboxCounter=lightbox.querySelector('.caption-counter');
const lightboxClose=lightbox.querySelector('.lightbox-close');

let itemIndex=0;

for(let i=0;i<galleryItems.length;i++){
        galleryItems[i].addEventListener("click",()=>{
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}

const prevItem=document.getElementById('prev-item');
const nextItem=document.getElementById('next-item');

nextItem.addEventListener("click",()=>{
    if(itemIndex==galleryItems.length-1)
        itemIndex=0;
    else
        itemIndex++;
    changeItem();
})

prevItem.addEventListener("click",()=>{
    if(itemIndex==0)
        itemIndex=galleryItems.length-1;
    else
        itemIndex--;
    changeItem();
})

const toggleLightbox=()=>{
    lightbox.classList.toggle("open");
}

const changeItem=()=>{
    imgSrc=galleryItems[itemIndex].querySelector(".gallery-item img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML='<h2>Title</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea molestias magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea molestias magni.</p>'
    lightboxCounter.textContent=`${itemIndex+1} / ${galleryItems.length}`;
}

lightbox.addEventListener('click',(e)=>{
    if(e.target===lightboxClose || e.target===lightbox)
        toggleLightbox();

})