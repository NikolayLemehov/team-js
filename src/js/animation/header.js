import anime from 'animejs';

let mobPoint = window.matchMedia('(max-width: 767px)');
let tabPoint = window.matchMedia('(max-width: 1199px)');

window.addEventListener('preloaderFinished', crossMobMedia);

mobPoint.addListener(crossMobMedia);
tabPoint.addListener(crossMobMedia);

function doAnimate(translateX) {
  anime({
    targets: '.title__part--first',
    translateX,
    duration: 3000,
  });

  anime({
    targets: '.title__part--second',
    translateX,
    duration: 3000,
  });
}

function crossMobMedia() {
  if (mobPoint.matches) {
    doAnimate(-500);
  } else if (tabPoint.matches) {
    doAnimate(-800);
  } else {
    doAnimate(-1000);
  }
}
