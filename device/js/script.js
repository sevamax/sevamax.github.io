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