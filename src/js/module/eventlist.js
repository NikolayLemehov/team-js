import { toggleModal, renderModal } from './modal';
import { eventApi } from '../api/EventApi';

const cardListRef = document.querySelector('.card-list');

cardListRef.addEventListener('click', e => {
  console.log(e.target);
  e.preventDefault();

  //есть ли родительский класс .card_item
  const cardItem = e.target.closest('.card__item');

  if (!cardItem) return;
  const id = cardItem.dataset.id;

  console.log(id);

  eventApi.fetchEvent(id).then(res => {
    renderModal(res.data);
    toggleModal();
  });
  // .catch(function () {
  // console.log('heyerro');
  // });
});
