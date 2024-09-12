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
