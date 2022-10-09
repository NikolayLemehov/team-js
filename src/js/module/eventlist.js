import { toggleModal, renderModal, onEscKeyPress } from './modal';
import { eventApi } from '../api/EventApi';

const cardListRef = document.querySelector('.card-list');

cardListRef.addEventListener('click', e => {
  e.preventDefault();

  //есть ли родительский класс .card_item
  const cardItem = e.target.closest('.card__item');
  if (!cardItem) return;

  const id = cardItem.dataset.id;

  console.log('id');

  console.log(id);
  window.addEventListener('keydown', onEscKeyPress);

  eventApi
    .fetchEvent(id)
    .then(res => {
      renderModal(res.data);
      toggleModal();
      onEscKeyPress;
    })
    .catch(function () {
      console.log('heyerro');
    });
});
