import { getEventModalMarkup } from '../markup/getEventModalMarkup';
import { removeChildren } from '../utils/removeChildren';
import { renderEventsWithPagination } from './renderEventsWithPagination';
import { select } from './select';
import { Notify } from 'notiflix';

const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalContent: document.querySelector('.modal__content'),
  authorBtn: document.querySelector('.modal__btn-author'),
  body: document.querySelector('body'),
  inputResearch: document.querySelector('.form__input'),
};

refs.closeModalBtn.addEventListener('click', removeEscListener);

export function toggleModal() {
  refs.modal.classList.toggle('visually-hidden');

  if (!refs.modal.classList.contains('visually-hidden')) {
    // Disable scroll
    refs.body.style.overflow = 'hidden';
  } else {
    // Enable scroll
    refs.body.style.overflow = 'auto';
  }
}

export function renderModal(data) {
  removeChildren(refs.modalContent);
  refs.modalContent.insertAdjacentHTML('afterbegin', getEventModalMarkup(data));
  refs.authorBtn.dataset.name = data._embedded.attractions[0].name;
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
  if (event.currentTarget === event.target) {
    toggleModal();
  }
}

refs.authorBtn.addEventListener('click', searchByAuthor);

async function searchByAuthor(e) {
  toggleModal();
  const data = {
    value: e.target.dataset.name,
    countryCode: '',
  };
  select.reset()
  await renderEventsWithPagination(data).catch(e => Notify.failure(e.message));
  refs.inputResearch.value = data.value
}
