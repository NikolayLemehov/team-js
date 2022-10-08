import { getEventModalMarkup } from '../markup/getEventModalMarkup';
import { removeChildren } from '../utils/removeChildren';

const refs = {
  // openModalBtns: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalContent: document.querySelector('.modal__content'),
};
// refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
refs.closeModalBtn.addEventListener('click', toggleModal);

export function toggleModal() {
  refs.modal.classList.toggle('visually-hidden');
}

export function renderModal(data) {
  removeChildren(refs.modalContent);
  refs.modalContent.insertAdjacentHTML('afterbegin', getEventModalMarkup(data));
}
