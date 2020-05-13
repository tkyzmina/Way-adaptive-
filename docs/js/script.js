'use strict';
var mainNav = document.querySelector('.main-nav');
var headerToggle = document.querySelector('.toggle-nav');
var navClose = document.querySelector('.main-nav__close');


mainNav.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--hide')) {
    mainNav.classList.remove('main-nav--hide');
    mainNav.classList.add('main-nav--show');
  } else {
    mainNav.classList.add('main-nav--hide');
    mainNav.classList.remove('main-nav--show');
  }
});
navClose.addEventListener('click', function () {
  mainNav.classList.add('main-nav--hide');
  mainNav.classList.remove('main-nav--show');
});

var buttonByuNow = document.querySelector('.tabs__button');
var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('.modal__close');
var buttonSubmit = modal.querySelector('.modal__button');
var successMessage = document.querySelector('.modal-sucсess');
var successClose = successMessage.querySelector('.modal-sucсess__close');

buttonByuNow.addEventListener('click', function () {
  modal.classList.toggle('modal__show');
});
modalClose.addEventListener('click', function () {
  modal.classList.remove('modal__show');
});

buttonSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal__show');
  successMessage.classList.remove('modal-success__hide');
  successMessage.classList.add('modal-success__show');
});
var closeSuccessMessage = function () {
  successMessage.classList.remove('modal-success__show');
  successMessage.classList.add('modal-success__hide');
};

successClose.addEventListener('click', closeSuccessMessage);

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closeSuccessMessage();
  }
});
