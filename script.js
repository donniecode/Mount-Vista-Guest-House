const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 300){
        header.style.position='fixed';
        header.style.top='0';
        header.style.zIndex='999';
    } else{
        header.style.position='initial';
    }
});
