let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
  offset: 100,
});

document.querySelector('.ham__box--inner').addEventListener('click', () => {
  document.querySelector('.ham__box--inner').classList.toggle('active');
  document.querySelector('.nav__list--mobile').classList.toggle('insideout');
  console.log('click');
});
