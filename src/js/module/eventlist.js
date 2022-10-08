import { toggleModal, renderModal } from './modal';
import { eventApi } from '../api/EventApi';

const imgLink = document.querySelector('.card__item a');

imgLink.classList.add('activeCard');

imgLink.addEventListener('click', e => {
  e.preventDefault();
  eventApi
    .fetchEvent('vvG1iZ95K_3K3Z')
    .then(data => {
      renderModal(data);
      toggleModal();
    })
    .catch(console.log);
});
