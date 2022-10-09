import { getEventModalMarkup } from '../markup/getEventModalMarkup';
import { removeChildren } from '../utils/removeChildren';

const refs = {
  // openModalBtns: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalContent: document.querySelector('.modal__content'),
  authorBtn: document.querySelector('.modal__lastBtn'),
  body: document.querySelector('body'),
};

refs.closeModalBtn.addEventListener('click', removeEscListener);

export function toggleModal() {
  refs.modal.classList.toggle('visually-hidden');

  if (!refs.modal.classList.contains('visually-hidden')) {
    // Disable scroll
    refs.body.style.overflow = 'hidden';
  } else {
    console.log('fu');
    // Enable scroll
    refs.body.style.overflow = 'auto';
  }
}

export function renderModal(data) {
  removeChildren(refs.modalContent);
  refs.modalContent.insertAdjacentHTML('afterbegin', getEventModalMarkup(data));
}

//closes with ESC button
export function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    removeEscListener();
  }
}

//remove listener when modal is close and change class to close modal
function removeEscListener() {
  toggleModal();
  window.removeEventListener('keydown', onEscKeyPress);
}

//close modal window with click in some place where no modal window

refs.modal.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  // console.log('click');

  // console.log(event.currentTarget);
  // console.log(event.target);
  if (event.currentTarget === event.target) {
    toggleModal();
  }
}

refs.authorBtn.addEventListener('click', searchByAuthor);

function searchByAuthor() {
  console.log('hey');
  toggleModal();
}
