export default function initscrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(e){
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior:'smooth',    //transição suave
      block:'start',        //no inicio de cada section.
    });
  }

  linksInternos.forEach((item)=> {
    item.addEventListener('click', scrollToSection);
  });
}

initscrollSuave();