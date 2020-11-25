let button_modalLogin = document.querySelector('.login-link');
let modalLogin = document.querySelector('.modal-login');
let buttons_modalClose = document.querySelectorAll('.modal-close');
let button_modalMap = document.querySelector('.button-map');
let modalMap = document.querySelector('.modal-map');

button_modalLogin.addEventListener('click', e => {
  modalLogin.style.display = "block";
})


for(let button_modalClose of buttons_modalClose) {

  if(button_modalClose.classList.contains('modal-close-map')) {
    button_modalClose.addEventListener('click', e => {
      modalMap.style.display = "none";
  })} else {
    button_modalClose.addEventListener('click', e => {
      modalLogin.style.display = "none";
  })}
}


button_modalMap.addEventListener('click', e => {
  modalMap.style.display = "block";
})