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

/* Rooms */
const roomsLi = document.querySelectorAll('.room-options li');
const roomsContainer = document.querySelectorAll('.rooms');

roomsLi.forEach((roomLi)=> {
    roomLi.addEventListener('click', ()=>{
        roomLi.classList.add('active-li');

        roomsLi.forEach((li)=>{
            if(li !== roomLi){
                li.classList.remove('active-li');
            }
        })
    })

    
})

