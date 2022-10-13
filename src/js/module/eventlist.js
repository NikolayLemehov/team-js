import { toggleModal, renderModal, onEscKeyPress } from './modal';
import { eventApi } from '../api/EventApi';
import { Notify } from 'notiflix';

const cardListRef = document.querySelector('.card__list');

cardListRef.addEventListener('click', e => {
  e.preventDefault();

  //есть ли родительский класс .card_item
  const cardItem = e.target.closest('.card__item');
  if (!cardItem) return;

  const id = cardItem.dataset.id;

  window.addEventListener('keydown', onEscKeyPress);

  eventApi.fetchEvent(id).then(res => {
    renderModal(res.data);
    toggleModal();
  })
    .catch(e => {
      Notify.failure(`inEventListErrorRender ${e.message}`);
    });
});
