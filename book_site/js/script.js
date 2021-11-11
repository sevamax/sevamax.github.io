'use strict'

let modalHeight = document.querySelector('.modal').clientHeight ;
let headerHeight = document.querySelector('.header').clientHeight;
let languageWrapper = document.querySelector('.language');
let languageActive = document.querySelector('.language__item--active');
let languageArrow = document.querySelector('.language__arrow');
let changedLangBtn = document.querySelector('.language__item--active + li');
let selectedBtn = document.querySelector('.language__item--selected');

function languageDrop(e) {
  if (e.target.closest('.language__item--active') || e.target.closest('.language__arrow')) {
    changedLangBtn.classList.toggle('language__item--selected');
    languageArrow.classList.toggle('language__arrow--active');
  }
  if (!e.target.closest('.language')) {
    changedLangBtn.classList.remove('language__item--selected');
    languageArrow.classList.remove('language__arrow--active');
  }

  // add language logic
  if (e.target.closest('.language__item--selected')) {
    let selectedBtn = document.querySelector('.language__item--selected');

    console.log(window.location.pathname)
    if (selectedBtn.textContent === 'RU') {
      window.location.href = "/ru" + window.location.pathname;
    } else {
      window.location.href = window.location.pathname.slice(3);
    }
  }
}


if (languageWrapper) {
  document.addEventListener('click', languageDrop)
}

// modal
let modal = document.querySelector('.modal')
let modalContent = document.querySelector('.modal__content');
let modalOpen = document.querySelectorAll('.modal-btn');
let modalClose = document.querySelector('.modal__close');


modalOpen.forEach(btnOpen => {
  btnOpen.addEventListener('click', e => {
    modal.classList.remove('visually-hidden');
    document.body.style.overflow = 'hidden';

    if (window.innerWidth <= 500) {
      modal.style.height = `${window.innerHeight}px`;
      modal.style.transform = `translateY(${-(headerHeight + 35) + window.pageYOffset}px)`
   } else {
      modal.style.top = `${window.pageYOffset}px`;
    }

  })
})


if (modal) {
  document.addEventListener('click', e => {
    if (!e.target.closest('.modal__content') &&
        !modal.classList.contains('visually-hidden') &&
        !e.target.closest('.modal-btn') || 
        e.target.closest('.modal__close')) {

      modal.classList.add('visually-hidden');
      document.body.style.overflow = null;
    }
  })

  document.addEventListener('keyup', e => {
    if (e.code == 'Escape' && !modal.classList.contains('visually-hidden')) {
      modal.classList.add('visually-hidden');
      document.body.style.overflow = null;
    }
  })

}


/* adaptive */
let promoTitle = document.querySelector('.promo__title');
let promoAuthor = document.querySelector('.promo__author');
let promoPhotoMob = document.querySelector('.promo__photo--mob');
let promoPhotoDesc = document.querySelector('.promo__item + .promo__photo');


if (window.innerWidth <= 800 && promoTitle) {
  console.log('hello')
  promoTitle.classList.add('visually-hidden');
  promoAuthor.classList.add('visually-hidden');
  promoPhotoMob.classList.remove('visually-hidden');
  console.log(promoPhotoMob, promoPhotoDesc)
  promoPhotoDesc.classList.add('visually-hidden');
}
