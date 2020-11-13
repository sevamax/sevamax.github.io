// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let sliderArrow = document.querySelector('.slider__arrow');
let slider = document.querySelector('.slider');

let wantSameBg = document.querySelector('.want-same');
let languageToggle = document.querySelector('button.language__title');;
let languageDropdown = document.querySelector('.language__dropdown');
let contactTel = document.querySelector('.contacts__tel a');



$(document).ready(function(){
  $('.slider-about').slick({
    accessibility: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});


$(document).ready(function(){
  $('.benefits__slider').slick({
    accessibility: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 1000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});

$('.single-item').slick();



sliderArrow.addEventListener('click', e => {
    sliderArrow.classList.toggle('slider__arrow-active');
    slider.style.cssText = "padding-bottom: 78px";

    if(sliderArrow.classList.contains('slider__arrow-active')) {
      sliderArrow.href = "#footer";
    }

    if(!sliderArrow.classList.contains('slider__arrow-active')) {
      sliderArrow.href = "#";
      slider.style.cssText = null;
    }
});


languageToggle.addEventListener('click', e => {
  languageDropdown.classList.toggle('language__dropdown-active');
});

/* Telephone */

if (document.documentElement.clientWidth > 768) {
  contactTel.href = "#footer";
}