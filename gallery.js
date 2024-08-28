let lis = document.querySelectorAll('.gallery-tab-menu li');
let n = 0;

function tabliReset(){
    for(let i =0; i < lis.length; i ++){
        lis[i].classList.remove('active-tab-item');
        lis[n].classList.add('active-tab-item');
    }
}
tabliReset();

lis.forEach((li)=>{
    li.addEventListener('click', (e)=>{
        const clickedLi = e.target;
        if(clickedLi){
            tabliReset();
            clickedLi.classList.add('active-tab-item');
        }

        lis.forEach((l)=>{
            if(l !== li){
                l.classList.remove('active-tab-item');
            }
        })
    })
})