let navMenuToggle = document.querySelector('.nav-toggle');
let navMenu = document.querySelector('.main-nav');
let header = document.querySelector('.page-header');
let isMenuOpen = false;
let menuCloseBtn = document.querySelector('.main-nav__close');

navMenuToggle.addEventListener('click', e => {

  console.log(isMenuOpen);
  if (innerWidth < 1068) {
    if (!isMenuOpen) {
      isMenuOpen = !isMenuOpen;
      document.body.classList.add('menu-open');
      document.body.style.backgroundColor = "#e0e0e0";
      header.style.backgroundColor = "#e0e0e0";
      navMenu.style.transform = "translateX(0%)";
    } else {
      isMenuOpen = !isMenuOpen;
      document.body.classList.remove('menu-open');
      document.body.style.backgroundColor = null;
      header.style.backgroundColor = null;
      navMenu.style.transform = null;
    }
  }
});
menuCloseBtn.addEventListener('click', e => {
  if (innerWidth < 1068) {
    if (!isMenuOpen) {
      isMenuOpen = !isMenuOpen;
      document.body.classList.add('menu-open');
      document.body.style.backgroundColor = "#e0e0e0";
      header.style.backgroundColor = "#e0e0e0";
      navMenu.style.transform = "translateX(0%)";
    } else {
      isMenuOpen = !isMenuOpen;
      document.body.classList.remove('menu-open');
      document.body.style.backgroundColor = null;
      header.style.backgroundColor = null;
      navMenu.style.transform = null;
    }
  }
});


window.addEventListener('scroll', function () {
  if (!header.classList.contains('page-header--minor')) {
    var html = document.documentElement;
    var body = document.body;

    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop;
    if (scrollTop > 0) {
      header.classList.add('page-header--add');
    } else {
      header.classList.remove('page-header--add');
    }
    // console.log(scrollTop);
  }
});



/* show all currencies */
let showAllCryptoBtn = document.querySelector('.crypto .currencies__show--open');
let showLessCryptoBtn = document.querySelector('.crypto .currencies__show--close');
let showAllFiatBtn = document.querySelector('.fiat .currencies__show--open');
let showLessFiatBtn = document.querySelector('.fiat .currencies__show--close');

let additionalCryptoCurrs = document.querySelectorAll('.crypto .currencies__currency--add');
let additionalFiatCurrs = document.querySelectorAll('.fiat .currencies__currency--add');

if (showAllCryptoBtn) {

  showAllCryptoBtn.addEventListener('click', e => {
    console.log('You click on showAllCryptoBtn ');
    for (let additionalCryptoCurr of additionalCryptoCurrs) {
      additionalCryptoCurr.style.display = "block";
    }
    showAllCryptoBtn.style.display = "none";
    showLessCryptoBtn.style.display = "block";
  });


  showLessCryptoBtn.addEventListener('click', e => {
    console.log('You click on showLessCryptoBtn ');
    for (let additionalCryptoCurr of additionalCryptoCurrs) {
      additionalCryptoCurr.style.display = "none";
    }
    showAllCryptoBtn.style.display = "block";
    showLessCryptoBtn.style.display = "none";
  });

  /* Fiat */

  showAllFiatBtn.addEventListener('click', e => {
    console.log('You click on showAllCryptoBtn ');
    for (let additionalFiatCurr of additionalFiatCurrs) {
      additionalFiatCurr.style.display = "block";
    }
    showAllFiatBtn.style.display = "none";
    showLessFiatBtn.style.display = "block";
  });



  showLessFiatBtn.addEventListener('click', e => {
    for (let additionalFiatCurr of additionalFiatCurrs) {
      additionalFiatCurr.style.display = "none";
    }
    showAllFiatBtn.style.display = "block";
    showLessFiatBtn.style.display = "none";
  });

  window.addEventListener('resize', e => {

    if (document.body.clientWidth < 1068) {

      for (let additionalCryptoCurr of additionalCryptoCurrs) {
        additionalCryptoCurr.style.display = "none";
      }
      for (let additionalFiatCurr of additionalFiatCurrs) {
        additionalFiatCurr.style.display = "none";
      }

      showAllCryptoBtn.style.display = "block";
      showAllFiatBtn.style.display = "block";


      showAllCryptoBtn.addEventListener('click', e => {
        for (let additionalCryptoCurr of additionalCryptoCurrs) {
          additionalCryptoCurr.style.display = "block";
        }
        showAllCryptoBtn.style.display = "none";
        showLessCryptoBtn.style.display = "block";
      });


      showLessCryptoBtn.addEventListener('click', e => {
        for (let additionalCryptoCurr of additionalCryptoCurrs) {
          additionalCryptoCurr.style.display = "none";
        }
        showAllCryptoBtn.style.display = "block";
        showLessCryptoBtn.style.display = "none";
      });

      /* Fiat */

      showAllFiatBtn.addEventListener('click', e => {
        for (let additionalFiatCurr of additionalFiatCurrs) {
          additionalFiatCurr.style.display = "block";
        }
        showAllFiatBtn.style.display = "none";
        showLessFiatBtn.style.display = "block";
      });



      showLessFiatBtn.addEventListener('click', e => {
        for (let additionalFiatCurr of additionalFiatCurrs) {
          additionalFiatCurr.style.display = "none";
        }
        showAllFiatBtn.style.display = "block";
        showLessFiatBtn.style.display = "none";
      });

    } else {

      for (let additionalCryptoCurr of additionalCryptoCurrs) {
        additionalCryptoCurr.style.display = "block";
      }
      for (let additionalFiatCurr of additionalFiatCurrs) {
        additionalFiatCurr.style.display = "block";
      }

      showAllCryptoBtn.style.display = "none";
      showLessCryptoBtn.style.display = "none";
      showAllFiatBtn.style.display = "none";
      showLessFiatBtn.style.display = "none";
    }
  });

}