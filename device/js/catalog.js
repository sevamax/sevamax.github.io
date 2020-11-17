let searchInput = document.querySelector('.search__input');
let searchButton = document.querySelector('.search__btn');


let catalogTitle = document.querySelector('h2.catalog-title');
let catalogList = document.querySelector('ul.list-catalog');
let catalogPlus = document.querySelector('.catalog-plus');

let mainNav = document.querySelector('.main-navigation');

let sortingButtons = document.querySelectorAll('.list-sorting button');

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

/* Sorting content */

for(let sortingButton of sortingButtons) {
  sortingButton.onclick = function() {
    if(sortingButton.dataset.sorting == 'price') {
      document.querySelector('button[data-sorting="price"]').classList.add('active-sort');
      document.querySelector('button[data-sorting="type"]').classList.remove('active-sort');
      document.querySelector('button[data-sorting="popular"]').classList.remove('active-sort');

    } else if(sortingButton.dataset.sorting == 'type') {
      document.querySelector('button[data-sorting="price"]').classList.remove('active-sort');
      document.querySelector('button[data-sorting="type"]').classList.add('active-sort');
      document.querySelector('button[data-sorting="popular"]').classList.remove('active-sort');
    } else {
      document.querySelector('button[data-sorting="price"]').classList.remove('active-sort');
      document.querySelector('button[data-sorting="type"]').classList.remove('active-sort');
      document.querySelector('button[data-sorting="popular"]').classList.add('active-sort');
    }

  }
}