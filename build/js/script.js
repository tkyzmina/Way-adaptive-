'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

// var buttonByuNow = document.querySelector('.tabs__button');
// var modal = document.querySelector('.modal');
// var modalClose = modal.querySelector('.modal__close');
// var buttonSubmit = modal.querySelector('.modal__button');
// var successMessage = document.querySelector('.modal-sucсess');
// var successClose = successMessage.querySelector('.modal-sucсess__close');

// buttonByuNow.addEventListener('click', function () {
//   modal.classList.toggle('modal__show');
// });
// modalClose.addEventListener('click', function () {
//   modal.classList.remove('modal__show');
// });
// buttonSubmit.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   modal.classList.remove('modal__show');
//   successMessage.classList.remove('modal-success__hide');
//   successMessage.classList.add('modal-success__show');
// });
// var closeSuccessMessage = function () {
//   successMessage.classList.remove('modal-success__show');
//   successMessage.classList.add('modal-success__hide');
// };

// successClose.addEventListener('click', closeSuccessMessage);

document.addEventListener('keypress', function (evt) {
  console.log(evt.code);
  // var keyCode = evt.keyCode;
  // if (keyCode == '27') {
  //   closeSuccessMessage();
  // }
});
