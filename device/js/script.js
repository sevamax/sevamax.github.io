let catalogTitle = document.querySelector('h2.catalog-title');
let catalogList = document.querySelector('ul.list-catalog');
let catalogPlus = document.querySelector('.catalog-plus');
let servicesDelivery = document.querySelector('.list-slider .btn-info-delivery');
let servicesWarranty = document.querySelector('.list-slider .btn-info-warranty');
let servicesCredit = document.querySelector('.list-slider .btn-info-credit');

let textDelivery = document.querySelector('.customers-slider-section-delivery');
let textWarranty = document.querySelector('.customers-slider-section-warranty');
let textCredit = document.querySelector('.customers-slider-section-credit');

let mainNav = document.querySelector('.main-navigation');




catalogTitle.addEventListener('click', e => {
  catalogList.classList.toggle('visible');
  if(mainNav.style.zIndex == '10') {
    mainNav.style.zIndex = '0';
  }
  else {
    mainNav.style.zIndex = '10';
  }

});
catalogPlus.addEventListener('click', e => {
  catalogList.classList.toggle('visible');
  if(mainNav.style.zIndex == '10') {
    mainNav.style.zIndex = '0';
  }
  else {
    mainNav.style.zIndex = '10';
  }

});


servicesDelivery.addEventListener('focus', e => {
  servicesDelivery.classList.toggle('btn-info-active');
  servicesDelivery.classList.remove('btn-info-static-active');
  servicesWarranty.classList.remove('btn-info-active');
  servicesCredit.classList.remove('btn-info-active');



});

servicesWarranty.addEventListener('focus', e => {
  servicesDelivery.classList.remove('btn-info-active');
  servicesDelivery.classList.remove('btn-info-static-active');
  servicesWarranty.classList.toggle('btn-info-active');
  servicesCredit.classList.remove('btn-info-active');


});

servicesCredit.addEventListener('focus', e => {
  servicesDelivery.classList.remove('btn-info-active');
  servicesDelivery.classList.remove('btn-info-static-active');
  servicesCredit.classList.toggle('btn-info-active');
  servicesWarranty.classList.remove('btn-info-active');

});

