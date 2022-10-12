const loadImage = ({detail}) => {
  const imgSmall = detail.containerRef.querySelectorAll('.loading-box__img--small');

  for (let i = 0; i < imgSmall.length; i++) {
    const imgLarge = new Image();
    imgLarge.dataset.largeNew = '';
    imgLarge.classList.add('loading-box__img', 'loading-box__img--large')
    imgLarge.src = imgSmall[i].dataset.large;

    imgLarge.addEventListener('load', () => {

      imgLarge.classList.add('onload');

      setTimeout(() => {
        imgSmall[i].classList.add('onload');
      }, 650);

    }, false);
    imgSmall[i].parentNode.appendChild(imgLarge);
  }
};


window.addEventListener('eventListRenderFinished', loadImage)
window.addEventListener('modalRenderFinished', loadImage)


