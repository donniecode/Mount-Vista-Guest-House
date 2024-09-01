/* gallery tab items */
const lis = document.querySelectorAll('.gallery-tab-menu li');
const allImgs = document.querySelectorAll('.gallery-images');

lis.forEach((li)=>{
    li.addEventListener('click', (e)=>{
        li.classList.add('active-tab-item');
        lis.forEach((l)=>{
          if(l !== li){
             l.classList.remove('active-tab-item');
            }
        })

    /* displaying images for each menu item */
    lis.forEach((imgItem) =>{
        const itemImgs = document.querySelector(`#${this.id}-imgs`);
        imgsReset();
        itemImgs.classList.add('show-imgs');
        })
      })
  })

/* hiding other images when its li is not clicked */
function imgsReset(){
    for(let i = 0; i < allImgs.length; i ++){
        allImgs[i].classList.remove('show-imgs');
        allImgs[0].classList.add('show-imgs');
    }
}
imgsReset();
