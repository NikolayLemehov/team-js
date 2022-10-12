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
    //   rotate: '1turn',
    duration: 3000,
    //  delay: 1000,
    //   easing: 'spring(1, 80, 10, 0)',
  });

  anime({
    targets: '.title__part--second',
    translateX,
    //   rotate: '1turn',
    duration: 3000,
    //  delay: 1000,
    //   easing: 'spring(1, 80, 10, 0)',
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
