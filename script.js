const header = document.querySelector('header');
const menuItems = document.querySelector('main-menu li a');
const backtotop = document.querySelector('.back-to-top');

window.addEventListener('scroll', ()=>{
  if(window.pageYOffset > 250){
    backtotop.style.display='initial';
  } else{
    backtotop.style.display='none';
  }
})

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        header.style.position='fixed';
        header.style.top='0';
        header.style.zIndex='999';
        header.style.backgroundColor="#fff";
        menuItems.style.color="hsl(0, 0%, 10%)";
    } else{
        header.style.position='absolute';
        header.style.backgroundColor="transparent";
    }
});

/* FAQs Section */
const details = document.querySelectorAll('details');


details.forEach((detail) => {
    detail.querySelector('summary').addEventListener('click', () => {
      details.forEach((d) => {
        if (d !== detail) {
          d.removeAttribute('open');
        }
      })
    })
  })

  /* testimonials cards slider */
  const prevCard = document.querySelector('#prev-card');
  const nextCard = document.querySelector('#next-card');
  const cardgroups = document.querySelectorAll('.card-group');
  let n = 0;

  function cardsReset(){
    for(let i=0; i<cardgroups.length; i++){
      cardgroups[i].style.display='none';
      cardgroups[n].style.display='grid';
    }
  }
  cardsReset();

 prevCard.addEventListener('click', ()=>{
  if(n > 0){
    n--;
  } else{
    n = cardgroups.length - 1;
  }
  cardsReset();
 })
 
 nextCard.addEventListener('click', ()=>{
  if(n < cardgroups.length - 1){
    n++;
  } else{
    n = 0;
  }
  cardsReset();
 })

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
