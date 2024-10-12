/* mobile navigation */
const hamburger = document.querySelector('#hamburger');
const closemenu = document.querySelector('#close-menu');
const sidebar = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', ()=>{
 hamburger.style.display='none';
 closemenu.style.display='block';
 sidebar.style.display='flex';
})
closemenu.addEventListener('click', ()=>{
 hamburger.style.display='block';
 closemenu.style.display='none';
 sidebar.style.display='none';
})


/* gallery interactions */
const lis = document.querySelectorAll('.gallery-tab-menu li');
const allImages = document.querySelectorAll('.gallery-images');

/* gallery tab items */
lis.forEach((li)=>{
    li.addEventListener('click', ()=>{
        li.classList.add('active-tab-item');
        lis.forEach((l)=>{
            if(l !== li){
                l.classList.remove('active-tab-item');
            }
        })
    

/* show only imgs associated with clicked li */
allImages.forEach((imgItem)=>{
    imgItem.classList.remove('show-imgs');
})

const target = li.getAttribute('data-target');
document.getElementById(target).classList.add('show-imgs');

})
})


/* full image controls */
/* const allImagesfull = document.querySelectorAll('.gallery-images img');
const imgBtns = document.querySelector('.img-full-btns i');
const imgLeft = document.querySelector('.img-full-btns .fa-chevron-left');
const imgRight = document.querySelector('.img-full-btns .fa-chevron-right');
const imgClose = document.querySelector('.img-full-btns .fa-close');
let n = 0;

function fullImgsReset(){
  for (let i = 0; i<allImages.length; i++){
    allImagesfull[i].classList.remove('img-full');
    allImagesfull[0].classList.add('img-full');
  }
}


allImagesfull.forEach((imageitem)=>{
  imageitem.addEventListener('click', (e)=>{
    const imageclicked = e.target;
    if(imageclicked){
      imgBtns.style.display = 'initial';
      imgLeft.style.display = 'initial';
      imgRight.style.display = 'initial';
      imageclicked.classList.add('img-full');
      fullImgsReset();
    } else{
        imageclicked.classList.remove('img-full');
        fullImgsReset();
    }
  })
})

function btnsReset(){
  for(let i = 0; i < allImagesfull.length; i++){
    allImagesfull[i].style.display = 'none';
    allImagesfull[n].style.display = 'initial';
  }
}

imgLeft.addEventListener('click', ()=>{
  if(n < 0){
    n--;
  } else{
    n = allImagesfull.length - 1;
  }
})

imgRight.addEventListener('click', ()=>{
  if(n = allImagesfull.length - 1){
    n++;
  } else{
    n = 0;
  }
})
imgClose.addEventListener('click', ()=>{}) */


