let navMenuToggle = document.querySelector('.nav-toggle');
let navMenu = document.querySelector('.main-nav');
let header = document.querySelector('.page-header');
let isMenuOpen = false;
let menuCloseBtn = document.querySelector('.main-nav__close');

if (navMenuToggle) {
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
}



if (header) {
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
}

/* language list */

let languageBtn = document.querySelector('.language__item');
let languageList = document.querySelector('.language-list');

if (languageBtn) {
  languageBtn.addEventListener('click', e => {
    languageList.classList.toggle('d-none');
  })
  languageList.addEventListener('click', e => {
    languageList.classList.toggle('d-none');
  })
}

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

let password = document.querySelector('#sign-password');
let showPassword = document.querySelector('.show-password--current');

if (showPassword) {
  showPassword.addEventListener('click', e => {
    if (password.type != 'text') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  });
}

let frontPassportPhotoWrapper = document.getElementById('front-photo-passport-wrapper');
let BackPassportPhotoWrapper = document.getElementById('back-photo-passport-wrapper');
let passportWrapper = document.querySelector('.passport');
let IdWrapper = document.querySelector('.id');

let idtypePassport = document.querySelector('input[value="passport"]');
let idtypeId = document.querySelector('input[value="id"]');

let idTypeValue = document.querySelector('input[name="id-type"]:checked');

if (idTypeValue) {
  idTypeValue = document.querySelector('input[name="id-type"]:checked').value;
  document.addEventListener('change', e => {

    if (idTypeValue == 'passport') {
      passportWrapper.classList.toggle('visually-hidden');
      IdWrapper.classList.toggle('visually-hidden');
    } else {
      passportWrapper.classList.toggle('visually-hidden');
      IdWrapper.classList.toggle('visually-hidden');
    }

    console.log(idTypeValue);
  });
}

/* user popup */

let userButton = document.querySelector('.user__wrapper .user__name');
let userPopup = document.querySelector('.user__popup');

if (userButton) {
  userButton.addEventListener('click', e => {
    userPopup.classList.toggle('d-none');
  });
  if (!userPopup.classList.contains('.d-none')) {
    window.addEventListener('keyup', e => {
      if (e.code == 'Escape') {
        userPopup.classList.add('d-none');
        console.log(1);
      }
    });
  }
}


/* Add modified --done */
let requirements = document.querySelectorAll('.requirements .requirements__item').length;
let requirementsTrue = document.querySelectorAll('.requirements .requirements__item--true').length;
let progressLine = document.querySelector('.profile-ver__progress');

if (requirementsTrue) {
  let i = 0;

  for (let i = 0; i < requirements; i++) {
    let progressBar = document.createElement('div');
    progressBar.classList.add('progress__bar');
    progressLine.insertAdjacentElement('afterbegin', progressBar);
  }

  let progressBars = document.querySelectorAll('.profile-ver__progress .progress__bar');
  for (let progressBar of progressBars) {
    if (i < requirementsTrue) {
      progressBar.classList.add('progress__bar--done');
      i++;
    }
  }
  if (document.querySelectorAll('.progress__bar--done').length == progressBars.length) {
    document.querySelector('.profile-ver__content .admin__subtitle').textContent = "Profile verification is completed";
  }
}

/* progress bar */

let progressBarsDone = document.querySelectorAll('.profile-ver__progress .progress__bar--done').length;
let textProgressBar = `.profile-ver__progress .progress__bar:nth-child(${progressBarsDone})`;
let selectorProgressDone = document.querySelector(`${textProgressBar}`);
if (progressBarsDone) {
  selectorProgressDone.classList.add('progress__bar--last');
}

/* Exchange details popup */

let exchangeOperations = document.querySelectorAll('.exchange__table-body tr');
let exchangePopup = document.querySelector('.exchange-operation');
let exchangePopupClose = document.querySelector('.exchange-operation__close');
let j = 1;

/* Tables` values */
let exchangeTableDates = document.querySelectorAll('.exchange-table__date');
let exchangeTableOrders = document.querySelectorAll('.exchange-table__order');
let exchangeTableTxids = document.querySelectorAll('.exchange-table__txid');
let exchangeTableTyps = document.querySelectorAll('.exchange-table__typ');
let exchangeTableStatuses = document.querySelectorAll('.exchange-table__status');
let exchangeTableCurrencies = document.querySelectorAll('.exchange-table__currency');
let exchangeTablePurchases = document.querySelectorAll('.exchange-table__purchase');
let exchangeTableAmounts = document.querySelectorAll('.exchange-table__amount');


/* Popups` values */
let detailValueCreated = document.querySelector('.detail__value--created');
let detailValueExecuted = document.querySelector('.detail__value--executed'); // хз что это
let detailValueType = document.querySelector('.detail__value--type');
let detailValuePayment = document.querySelector('.detail__value--payment');
let detailValueStatus = document.querySelector('.detail__value--status');
let detailValueId = document.querySelector('.detail__value--id');
let detailValueTxid = document.querySelector('.detail__value--txid');
let detailValueAddress = document.querySelector('.detail__value--address');
let detailValueGive = document.querySelector('.detail__value--give');
let detailValueGet = document.querySelector('.detail__value--get');

for (let exchangeOperation of exchangeOperations) {
  exchangeOperation.setAttribute('data-row-num', j);
  j++;
}

for (let i = 1; i <= exchangeOperations.length; i++) {

  document.querySelector(`.exchange__table-body tr[data-row-num='${i}']`).addEventListener('click', e => {
    for (let j = 1; j <= exchangeOperations.length; j++) {
      if (j == i) {
        detailValueCreated.textContent = exchangeTableDates[i].textContent;
        detailValueType.textContent = exchangeTableTyps[i].textContent;
        detailValueStatus.textContent = exchangeTableStatuses[i].textContent;
        detailValueId.textContent = exchangeTableOrders[i].textContent;
        detailValueTxid.textContent = exchangeTableTxids[i].textContent;
        detailValueGive.textContent = exchangeTableCurrencies[i].textContent.slice(5);
        detailValueGet.textContent = exchangeTableCurrencies[i].textContent.slice(0, 3);
        exchangePopup.classList.toggle('d-none');
        break;
      }
    }
  });
}

if (exchangePopup) {

  if (!exchangePopup.classList.contains('.d-none')) {

    exchangePopupClose.addEventListener('click', e => {
      exchangePopup.classList.add('d-none');
    })

    window.addEventListener('keyup', e => {
      if (e.code == 'Escape') {
        exchangePopup.classList.add('d-none');
      }
    });
  }
}

/* bonus program */
let referral = document.querySelector('.referral-program');
let partner = document.querySelector('.partner-program');

let programWrapper = document.querySelector('.program__wrapper');
let programRef = document.querySelector('.program--ref');
let programPar = document.querySelector('.program--par');


if (programRef) {
  programRef.addEventListener('click', e => {
    if (!programRef.classList.contains('program--active')) {
      programRef.classList.toggle('program--active');
      programPar.classList.toggle('program--active');
      referral.classList.toggle('d-none');
      partner.classList.toggle('d-none');
      if (document.body.clientWidth <= 650) {
        programWrapper.classList.remove('program__wrapper--par');
        document.querySelector('main').classList.add('container');
        document.querySelector('.setting__title').classList.remove('container');
        document.querySelector('.program__wrapper').classList.remove('container');
      }
    }
  });
  programPar.addEventListener('click', e => {
    if (!programPar.classList.contains('program--active')) {
      programPar.classList.toggle('program--active');
      programRef.classList.toggle('program--active');

      partner.classList.toggle('d-none');
      referral.classList.toggle('d-none');
    }
    if (document.body.clientWidth <= 650) {
      document.querySelector('main').classList.remove('container');
      document.querySelector('.setting__title').classList.add('container');
      document.querySelector('.program__wrapper').classList.add('container');
      document.querySelector('.partner-program .program__title').classList.add('container');
      document.querySelector('.user-data').classList.add('container');
      document.querySelector('.partner-program__content .program__title').classList.add('container');
      document.querySelector('.partner-program__content .program__title').style.margin = "21px auto";
      document.querySelector('.turnover__title').classList.add('container');
      let turnoverItems = document.querySelectorAll('.turnover__item ');

      turnoverItems.forEach(function(item, i) {
        item.style.paddingLeft = "16px";
        item.style.paddingRight = "16px";
      })
    }

  });
}





let settingWrapper = document.querySelector('.settings__wrapper.program__wrapper');
let settingsProfile = document.querySelector('.settings__profile');
let settingsDocument = document.querySelector('.settings__documents');
let settingsSecurity = document.querySelector('.settings__security');

let programPro = document.querySelector('.program--pro');
let programDoc = document.querySelector('.program--doc');
let programSec = document.querySelector('.program--sec');

if (settingWrapper) {
  programPro.addEventListener('click', e => {
    if (!programPro.classList.contains('program--active')) {
      programPro.classList.add('program--active');
      programDoc.classList.remove('program--active');
      programSec.classList.remove('program--active');

      settingsProfile.classList.remove('d-none');
      settingsDocument.classList.add('d-none');
      settingsSecurity.classList.add('d-none');
      // if(document.body.clientWidth <= 650) {
      //   programWrapper.classList.remove('program__wrapper--par');
      // }
    }
  });
  programDoc.addEventListener('click', e => {
    if (!programDoc.classList.contains('program--active')) {
      programDoc.classList.add('program--active');
      programPro.classList.remove('program--active');
      programSec.classList.remove('program--active');

      settingsDocument.classList.remove('d-none');
      settingsProfile.classList.add('d-none');
      settingsSecurity.classList.add('d-none');

      // referral.classList.toggle('d-none');
      // partner.classList.toggle('d-none');
      // if(document.body.clientWidth <= 650) {
      //   programWrapper.classList.remove('program__wrapper--par');
      // }
    }
  });
  programSec.addEventListener('click', e => {
    if (!programSec.classList.contains('program--active')) {
      programSec.classList.add('program--active');
      programPro.classList.remove('program--active');
      programDoc.classList.remove('program--active');

      settingsSecurity.classList.remove('d-none');
      settingsDocument.classList.add('d-none');
      settingsProfile.classList.add('d-none');

      // referral.classList.toggle('d-none');
      // partner.classList.toggle('d-none');
      // if(document.body.clientWidth <= 650) {
      //   programWrapper.classList.remove('program__wrapper--par');
      // }
    }
  });
}

let twoFactorInput = document.querySelector('.security__label input');
let twoFactorLabel = document.querySelector('.security__label label');

if (twoFactorLabel) {
  twoFactorInput.addEventListener('click', e => {
    if (twoFactorInput.checked) {
      twoFactorLabel.textContent = 'On';
      turnOnPopup.classList.remove('d-none');
    } else {
      twoFactorLabel.textContent = 'Off';
      turnOffPopup.classList.remove('d-none');
    }
  })
}

let turnOffPopup = document.querySelector('.turn-off');
let turnOnPopup = document.querySelector('.turn-on');
let cancelBtns = document.querySelectorAll('.cancel-btn');

for (let cancelBtn of cancelBtns) {
  cancelBtn.addEventListener('click', e => {
    turnOffPopup.classList.add('d-none');
    turnOnPopup.classList.add('d-none');
  });
}



let passwordChange = document.querySelector('.password-change');
let profileName = document.querySelector('.content__item--name');
let profilePassword = document.querySelector('.content__item--password');

if (passwordChange) {
  passwordChange.addEventListener('click', e => {
    profileName.insertAdjacentHTML('afterend',
      `   <div class="password-change__wrapper" style="box-shadow: 0px 9px 18px rgba(15, 28, 75, 0.43);">     
          <div class="content__item">
            <p class="content__name">Current password</p>
            <div class="content__value-wrapper">
              <input class="content__value input" type="password" placeholder="Enter current password" style="border: none; padding: 0; font: inherit;">
              <div class="content-save__wrapper">
                <button class="content__change password__cancel-btn text-btn" type="button">Cancel</button>
                <button class="content__change password__save-btn text-btn" type="button">Save</button>
              </div>
            </div>
          </div>
          <div class="content__item">
            <p class="content__name">New password</p>
            <div class="content__value-wrapper">
              <input class="content__value input" type="password" placeholder="Enter new password" style="border: none; padding: 0; font: inherit;">
            </div>
          </div>
          <div class="content__item">
          <p class="content__name">Confirm new password</p>
          <div class="content__value-wrapper">
            <input class="content__value input" type="password" placeholder="Confirm password" style="border: none; padding: 0; font: inherit;">
          </div>
        </div>
      </div>
`);
    profilePassword.classList.add('d-none');
    let passwordCancelBtn = document.querySelector('.password__cancel-btn');
    let passwordSaveBtn = document.querySelector('.password__save-btn');

    passwordCancelBtn.addEventListener('click', e => {
      document.querySelector('.password-change__wrapper').classList.add('d-none');
      profilePassword.classList.remove('d-none');
    });

    passwordSaveBtn.addEventListener('click', e => {
      document.querySelector('.password-change__wrapper').classList.add('d-none');
      profilePassword.classList.remove('d-none');
    });

  });

}

let changePasswordMob = document.querySelector('.content__change--password');

if (changePasswordMob) {

  changePasswordMob.addEventListener('click', e => {
    console.log(123);
    document.body.insertAdjacentHTML('afterbegin',
      `<div class="change-password-mob" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; background-color: #fff; z-index: 5000; padding-top: 8px; padding-left: 24px; padding-right: 24px; display: flex;
 justify-content: flex-start; flex-direction: column">
    <div class="change__header" style="display: flex; align-items: center;width: 290px; margin: 0 auto; ">
      <button class="change-password-back" type="button" style=";width:24px; height: 24px; background: transparent url('../img/select-arrow.svg') center center no-repeat; transform: rotate(90deg); border: none"></button>
      <h2 class="setting__title" style="margin-bottom: 0;margin-left: 35px">Change password</h2>
    </div>
    <div class="change__content" style="margin: 0 auto;margin-top: 16px;    width: 272px;">

      <label for="current-password" style="font: inherit; display: block;color: #959ca5; font-weight: 600;margin-bottom: 4px;">Current password</label>
      <div class="input__wrapper" style="margin-bottom: 36px;border: 1px solid #E2E8ED;box-sizing: border-box; border-radius: 8px;display: flex;justify-content: space-between;padding: 8px 16px;align-items: center;">
        <input id="current-password" type="password" class="input" style="border: none;font: inherit;padding: 0;" placeholder="Enter current password">
        <button class="show-password show-password--current" type="button" style="border: none; padding: 0; width: 16px; height: 16px; background: transparent url('../img/show-password.svg') center center no-repeat;"></button>
      </div>

      <label for="new-password" style="font: inherit; display: block;color: #959ca5; font-weight: 600;margin-bottom: 4px;">New password</label>
      <div class="input__wrapper" style="border: 1px solid #E2E8ED;box-sizing: border-box; border-radius: 8px;display: flex;justify-content: space-between;padding: 8px 16px;align-items: center;">
        <input id="new-password" type="password" class="input" style="border: none;font: inherit;padding: 0;" placeholder="Create password">
        <button class="show-password show-password--new" type="button" style="border: none; padding: 0; width: 16px; height: 16px; background: transparent url('../img/show-password.svg') center center no-repeat;"></button>
      </div>

      <button class="primary-btn" type="button" style="width: 100%;margin-top: 50px;">Change password</button>

    </div>
  </div>`);

    let changePasswordBack = document.querySelector('.change-password-back');
    let showPasswordCurrent = document.querySelector('.show-password--current');
    let currentPassword = document.querySelector('#current-password');

    let showPasswordNew = document.querySelector('.show-password--new');
    let newPassword = document.querySelector('#new-password');

    changePasswordBack.addEventListener('click', e => {
      document.querySelector('.change-password-mob').remove();
    });
    showPasswordCurrent.addEventListener('click', e => {
      if (currentPassword.type != 'text') {
        currentPassword.type = 'text';
      } else {
        currentPassword.type = 'password';
      }
    });

    showPasswordNew.addEventListener('click', e => {
      if (newPassword.type != 'text') {
        newPassword.type = 'text';
      } else {
        newPassword.type = 'password';
      }
    });
  });
}


// let countrySelect = document.querySelector('.select--country');
let countryList = document.querySelector('.select--country .select-list');
let countryActive = document.querySelector('.select--country .select__active');
let countryItems = document.querySelectorAll('.select--country .select-list__item');
let countryNumberCode = document.querySelector('#sign-number');
if (countryActive) {

  countryActive.addEventListener(
    'click',
    e => {
      countryList.classList.toggle('d-none');
      countryActive.classList.toggle('select__focus');
    });

  for (let countryItem of countryItems) {
    countryItem.addEventListener('click', e => {
      countryList.classList.toggle('d-none');
      document.querySelector('.select--country .select__acitive-text').textContent = countryItem.textContent;
      document.querySelector('.select--country .select__acitive-text').style.color = "#495055";
      countryActive.classList.remove('select__focus');

      if (countryNumberCode) {
        countryNumberCode.value = countryItem.dataset.countryNumber;

        if (!countryNumberCode.value) {
          countryNumberCode.value = "+380"
        }
      }
    });
  }


}

/* currency items */

let currenciesItems = document.querySelectorAll('.dropdown-select');
let currenciesLists = document.querySelectorAll('.currency-list');

currenciesItems.forEach(function (currenciesItem, i, currenciesItems) {
  currenciesItem.addEventListener('click', e => {
    currenciesLists.forEach(function (currenciesList, j, currenciesLists) {
      if (i == j) {
        currenciesList.classList.toggle('d-none');
      }
    });
  });
});

/* pagination */


let paginationBtn = document.querySelector('.pagination__select-item');
let paginationList = document.querySelector('.pagination-list');
let paginationListItems = document.querySelectorAll('.pagination-list__item');

if (paginationBtn) {
  paginationBtn.addEventListener('click', e => {
    paginationList.classList.toggle('d-none');
  });

  paginationListItems.forEach(function (paginationListItem, i, paginationListItems) {
    paginationListItem.addEventListener('click', e => {
      paginationList.classList.toggle('d-none');
      paginationBtn.textContent = paginationListItem.textContent;
    })
  });
}