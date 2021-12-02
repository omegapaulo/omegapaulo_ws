const menu = document.querySelector('.ham .ham__box--inner');
menu.addEventListener('click', () => {
  document.querySelector('.ham .ham__box--inner').classList.toggle('active');
  document.querySelector('nav').classList.toggle('toggle-entrance');
});

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
  offset: 100,
});
