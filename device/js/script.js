let catalogTitle = document.querySelector('h2.catalog-title');
let catalogList = document.querySelector('ul.list-catalog');
let catalogPlus = document.querySelector('.catalog-plus');

let popularRadiosFirst = document.querySelectorAll('.popular-switch .first');
let popularRadiosSecond = document.querySelectorAll('.popular-switch .second');
let popularRadiosThird = document.querySelectorAll('.popular-switch .third');
let popularItemFirst = document.querySelector('.popular-item.first-item');
let popularItemSecond = document.querySelector('.popular-item.second-item');
let popularItemThird = document.querySelector('.popular-item.third-item');

let servicesDelivery = document.querySelector('.list-slider .btn-info-delivery');
let servicesWarranty = document.querySelector('.list-slider .btn-info-warranty');
let servicesCredit = document.querySelector('.list-slider .btn-info-credit');

let textDelivery = document.querySelector('.customers-slider-section-delivery');
let textWarranty = document.querySelector('.customers-slider-section-warranty');
let textCredit = document.querySelector('.customers-slider-section-credit');

let mainNav = document.querySelector('.main-navigation');

let searchInput = document.querySelector('.search__input');
let searchButton = document.querySelector('.search__btn');

/* Visible header catalog */

catalogTitle.addEventListener('click', e => {
  catalogList.classList.toggle('visible');
  if (mainNav.style.zIndex == '10') {
    mainNav.style.zIndex = '0';
  } else {
    mainNav.style.zIndex = '10';
  }

});
catalogPlus.addEventListener('click', e => {
  catalogList.classList.toggle('visible');
  if (mainNav.style.zIndex == '10') {
    mainNav.style.zIndex = '0';
  } else {
    mainNav.style.zIndex = '10';
  }

});

/* Popular Item switcher */

for (let popularRadioFirst of popularRadiosFirst) {
  popularRadioFirst.onchange = function () {
    popularItemFirst.classList.remove('visually-hidden');
    popularItemSecond.classList.add('visually-hidden');
    popularItemThird.classList.add('visually-hidden');
    document.querySelector('.first-item .first').checked = true;
  }
}
for (let popularRadioSecond of popularRadiosSecond) {
  popularRadioSecond.onchange = function () {
    popularItemFirst.classList.add('visually-hidden');
    popularItemSecond.classList.remove('visually-hidden');
    popularItemThird.classList.add('visually-hidden');
    document.querySelector('.second-item .second').checked = true;
  }
}
for (let popularRadioThird of popularRadiosThird) {
  popularRadioThird.onchange = function () {
    popularItemFirst.classList.add('visually-hidden');
    popularItemSecond.classList.add('visually-hidden');
    popularItemThird.classList.remove('visually-hidden');
    document.querySelector('.third-item .third').checked = true;
  }
}

/* Services switcher */


servicesDelivery.addEventListener('click', e => {
  servicesDelivery.classList.toggle('btn-info-active');
  servicesWarranty.classList.remove('btn-info-active');
  servicesCredit.classList.remove('btn-info-active');
  textDelivery.hidden = false;
  textWarranty.hidden = true;
  textCredit.hidden = true;
});

servicesWarranty.addEventListener('click', e => {
  servicesDelivery.classList.remove('btn-info-active');
  servicesWarranty.classList.toggle('btn-info-active');
  servicesCredit.classList.remove('btn-info-active');

  textDelivery.hidden = true;
  textWarranty.hidden = false;
  textCredit.hidden = true;

});

servicesCredit.addEventListener('click', e => {
  servicesDelivery.classList.remove('btn-info-active');
  servicesCredit.classList.toggle('btn-info-active');
  servicesWarranty.classList.remove('btn-info-active');

  textDelivery.hidden = true;
  textWarranty.hidden = true;
  textCredit.hidden = false;
});

/* Seach  */

/* clean input  */

searchButton.onclick = function() {
  console.log(searchInput.value);
  searchInput.value = '';
}

/* input enter */

searchInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
      searchButton.style.color = "#ffffff";
      searchButton.style.backgroundColor = "#000000";
  }
});

searchInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchButton.style.color = null;
    searchButton.style.backgroundColor = null;
    searchButton.click();
  }
});


/* Modal */

let button_modalWrite = document.querySelector('.contacts button');
let modalWrite = document.querySelector('.modal-write');

let modalWrite_form = modalWrite.querySelector('form');
let modalWrite_name = modalWrite_form.querySelector('[name=user-name]');
let modalWrite_mail = modalWrite_form.querySelector('[name=user-email]');
let modalWrite_text = modalWrite_form.querySelector('[name=user-text]');
let modalWrite_submit = modalWrite_form.querySelector('button');

let buttons_modalClose = document.querySelectorAll('.modal-close');
let button_modalMap = document.querySelector('.contacts img');
let modalMap = document.querySelector('.modal-map');

let storage_name = "";
let isStorageWorks = true;

try {
  storage_name = localStorage.getItem('name');
} catch(err) {
  isStorageWorks = false;
}

/* Modal write us */
button_modalWrite.addEventListener('click', e => {
  modalWrite.classList.toggle('modal-show');
  if (storage_name && isStorageWorks) {
    modalWrite_name.value = storage_name;
    modalWrite_mail.focus();
  } else {
    modalWrite_name.focus();
  }
});

/* Form processing */

modalWrite_submit.addEventListener('click', e => {
  e.preventDefault();
  if (!modalWrite_name.value || !modalWrite_mail.value) {
    console.log('Put all your data');
    modalWrite.classList.remove('modal-error');
    modalMap.offsetWidth = modalMap.offsetWidth;
    modalWrite.classList.add('modal-error');
  } else {
    localStorage.setItem('name', modalWrite_name.value);
    console.log(`${modalWrite_name.value}`);
    location.reload();
  }
});



/* modal close escape */

for(let button_modalClose of buttons_modalClose) {

  if(!button_modalClose.classList.contains('modal-close-map')) {
    button_modalClose.addEventListener('click', e => {
      modalWrite.classList.toggle('modal-show');
      modalWrite.classList.remove('modal-error');
    });
  } else {
    button_modalClose.addEventListener('click', e => {
    modalMap.classList.toggle('modal-show');

    });
  }
}


window.addEventListener('keydown', e => {
  if (e.key == 'Escape') {
    e.preventDefault();
    modalWrite.classList.remove('modal-show');
    modalWrite.classList.remove('modal-error');
    modalMap.classList.remove('modal-show');
  }
});


/* Modal map */
button_modalMap.addEventListener('click', e => {
  modalMap.classList.toggle('modal-show');
});

