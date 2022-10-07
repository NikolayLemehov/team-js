const more = document.querySelector('.more');
modal = document.querySelector('.modal');
close = document.querySelector('.close');

more.addEventListener('click', function () {
  modal.style.display = 'block';
  modal.classList.add('modal-animation');
});

close.addEventListener('click', function () {
  modal.style.display = 'none';
  modal.classList.remove('modal-animation');
});
