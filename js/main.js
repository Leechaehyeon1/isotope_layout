window.addEventListener('load', () => {
  const gird = new Isotope('section', {
    itemSelector: 'article',
    columnWidth: 'article',
    transitionDuration: '0.5s'
  });

  const btns = document.querySelectorAll('main ul li');
  for(let elem of btns){
    elem.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.currentTarget.querySelector('a').getAttribute('href');
      gird.arrange({filter: target});

      for(let elem2 of btns){
        elem2.classList.remove('on');
      }
      elem.classList.add('on');
    });
  }
});