let button_modalLogin = document.querySelector('.login-link');
let modalLogin = document.querySelector('.modal-login');
let buttons_modalClose = document.querySelectorAll('.modal-close');
let button_modalMap = document.querySelector('.button-map');
let modalMap = document.querySelector('.modal-map');

let storageLogin =  "";
let isStorageSupport = true;

try {
  storageLogin =  localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

let loginForm = modalLogin.querySelector('.login-form');
let login = document.querySelector('[name=login]');
let password = document.querySelector('[name=password]');
let remember = document.querySelector('[name=remember]');

let appointmentForm = document.querySelector('.appointment-form');
let appointmentDate = appointmentForm.querySelector('[name=date]');
let appointmentTime = appointmentForm.querySelector('[name=time]');
let appointmentName = appointmentForm.querySelector('[name=name]');
let appointmentPhone = appointmentForm.querySelector('[name=phone]');

button_modalLogin.addEventListener('click', e => {
  e.preventDefault();
  modalLogin.classList.toggle('modal-show');

  if (storageLogin) {
    login.value = storageLogin;
    password.focus();
  } else {
    login.focus();
  }
});


loginForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!login.value || !password.value) {
    modalLogin.classList.remove('modal-error');
    modalLogin.offsetWidth =  modalLogin.offsetWidth;
    modalLogin.classList.add('modal-error');
    console.log('Please, write valid login and password');
  } else {
    if( remember.checked && isStorageSupport ) {
     localStorage.setItem('login', login.value);
    }

    console.log(`You entered \n Your login - ${login.value} \n Your password - ${password.value} \n Remember password - ${remember.checked}`);
    location.reload()
  }

});

appointmentForm.addEventListener('submit', e => {
  e.preventDefault();
      console.log(`
    Client's name  -    ${appointmentName.value} \n 
    Client's phone -    ${appointmentPhone.value} \n
    Date           -    ${appointmentDate.value} \n
    Time           -    ${appointmentTime.value} \n`);
});



for(let button_modalClose of buttons_modalClose) {

  if(button_modalClose.classList.contains('modal-close-map')) {
    button_modalClose.addEventListener('click', e => {
      modalMap.classList.toggle('modal-show');
  }); } else {
    button_modalClose.addEventListener('click', e => {
      modalLogin.classList.remove('modal-error');
      modalLogin.classList.toggle('modal-show');
  });}
}


button_modalMap.addEventListener('click', e => {
  e.preventDefault();
  modalMap.classList.toggle('modal-show');
});

window.addEventListener('keydown', (e) => {

  if((e.key == 'Escape')) {
    e.preventDefault();
    
    if (modalLogin.classList.contains('modal-show')) {
      modalLogin.classList.remove('modal-show');
      modalLogin.classList.remove('modal-error');
    } else if (modalMap.classList.contains('modal-show')) {    
      modalMap.classList.remove('modal-show');
    }
  }
});