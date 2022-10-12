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
function ifAuthorExists(cb) {
  try {
    return cb();
  } catch {
    return false;
  }
}
export function renderModal(data) {
  const name =
    ifAuthorExists(() => data._embedded.attractions[0].name) ||
    ifAuthorExists(() => data.name) ||
    'Unknown author';
  removeChildren(refs.modalContent);
  refs.modalContent.insertAdjacentHTML('afterbegin', getEventModalMarkup(data));
  window.dispatchEvent(new CustomEvent('modalRenderFinished',
    {detail: {containerRef: refs.modal}}));
  refs.authorBtn.dataset.name = name;
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
    window.removeEventListener('keydown', onEscKeyPress);
  }
}

refs.authorBtn.addEventListener('click', searchByAuthor);

async function searchByAuthor(e) {
  window.removeEventListener('keydown', onEscKeyPress);
  toggleModal();
  const data = {
    value: e.target.dataset.name,
    countryCode: '',
  };
  select.reset();
  await renderEventsWithPagination(data).catch(e => Notify.failure(e.message));
  refs.inputResearch.value = data.value;
}
