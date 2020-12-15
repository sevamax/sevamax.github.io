let modalButton = document.querySelector('.modal_search button');
let modalButtonField = document.querySelector('.modal_search h2');
let modalForm = document.querySelector('.modal_search-form');
let modalFormButton = document.querySelector('.modal_search-form button');
let modalInputs = document.querySelectorAll('.modal_search-form input');



modalButtonField.addEventListener('click', e => {
  modalForm.classList.toggle('form-disappear');
  
  for(let modalInput of modalInputs) {
    if (modalForm.classList.contains('form-disappear')) {
      modalInput.disabled = "true";
      modalFormButton.disabled = "true";
      console.log(true);
    } else {
      modalInput.removeAttribute("disabled");
      modalFormButton.removeAttribute("disabled");
      console.log(false );
    }
  }

});

modalButton.addEventListener('focus', e => {
  document.querySelector('.modal_search h2').style.backgroundColor = "#604e43";
});
modalButton.addEventListener('blur', e => {
  document.querySelector('.modal_search h2').style.backgroundColor = null;
});

modalButton.addEventListener('keydown', e => {
  if(e.key  === ' ') {
    document.querySelector('.modal_search h2').style.backgroundColor = '#503e33';
    document.querySelector('.modal_search h2').style.color = 'rgba(255, 255, 255, 0.3)';
  }
});
modalButton.addEventListener('keyup', e => {
  if(e.key  === ' ') {
    document.querySelector('.modal_search h2').style.backgroundColor = null;
    document.querySelector('.modal_search h2').style.color = null;
  }
});