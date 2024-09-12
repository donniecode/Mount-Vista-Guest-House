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


/* form validation */
/* const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const messageInput= document.querySelector('#message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');
const messageError= document.querySelector('#message-error');

function formValidation(){
        if(nameInput.value.length < 1){
            nameError.textContent='please type in your name';
        } else{
            nameError.textContent='';
        }
}
 */

/* form smtpjs */
const sumbitBtn = document.querySelector('#submit-btn');
sumbitBtn.addEventListener('click', function(e){
    e.preventDefault();

let namevalue = document.querySelector('#name').value;
let emailvalue = document.querySelector('#email').value;
let phonevalue = document.querySelector('#phone').value;
let messagevalue = document.querySelector('#message').value;

let body = `Name: ` + namevalue + `<br/> Email: ` + emailvalue + `<br/>Phone: ` + phonevalue + `<br/> Message: ` + messagevalue;

    Email.send({
Host : "smtp.elasticemail.com",
Username : "doniecode@gmail.com",
Password : "BA4BC34BD08DAED7EB189823D322B358CDB1",
To : 'doniecode@gmail.com',
From : "doniecode@gmail.com",
Subject : "Msg From Mount Vista Website",
Body : body,
}).then(
message => {
    if(message=='OK'){
        swal("Thank You!", "Message sent. Mount Vista will reply ASAP", "success");
    } else{
        swal ( "Oops" ,  "Something went wrong!" ,  "error" );
    }
}
);

})