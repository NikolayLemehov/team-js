import defaultImg from './images/hero_bg@1x_mob.jpg'

const label = 'test';
console.time(label);

// const img = document.querySelector('.test-img1')
// const img2 = document.querySelector('.test-img2')
// const img3 = document.querySelector('.test-img3')
// // console.log('img', img.complete)
// function loaded(num) {
//   console.trace(num)
// }
// // loadImg(img, 1).then(onSuccess).catch(onError)
// // loadImg(img2, 2).then(console.log)
// // loadImg(img3, 3).then(console.log)
//
// function loadImg(img) {
//   return new Promise((res, rej) => {
//     img.addEventListener('load', () => res(img), {once: true});
//     img.addEventListener('error', (err) => rej(img), {once: true});
//   })
// }
//
// function onSuccess(img) {
//   console.log('img success', img.complete)
//   img.src = img.dataset.src
// }
//
// function onError(img) {
//   console.log('img error', img.complete)
//   img.src = 'default url'
// }

const imgSmall = document.querySelectorAll('.loading');

const loadImage = () => {
  for (let i = 0; i < imgSmall.length; i++) {
    const imgLarge = new Image();
    imgLarge.dataset.largeNew = '';
    imgLarge.src = imgSmall[i].dataset.large;
    console.log('add src');
    console.timeLog(label);

    imgLarge.addEventListener('load', () => {

      console.log('add load');
      console.timeLog(label);
      imgLarge.classList.add('onload');

      setTimeout(
        () => {
          console.log('timeout');
          console.timeLog(label);
          imgSmall[i].classList.add('onload');
        }, 650);

      imgSmall[i].parentNode.appendChild(imgLarge);
    }, false);
    console.log('append');
    console.timeLog(label);
  }
};

loadImage();


// function loadImg(img, num) {
//   if (img.complete) {
//     loaded(num)
//   } else {
//     img.addEventListener('load', loaded.bind(null, num))
//     img.addEventListener('error', function() {
//       console.log('error 1')
//     })
//   }
// }
