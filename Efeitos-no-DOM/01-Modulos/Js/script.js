/*                classList
  Retorna uma lista com as classes elemento.
  Permite adicionar, remover e verificar se contém.
*/

const menu = document.querySelector('.menu');
//console.log(menu.classList); // [] string
//console.log(menu.className); // string

menu.classList.add('ativo'); //adiciona um "elemento" ao componente 'tag'.
menu.classList.add('ativo', 'mobile');

menu.classList.remove('mobile');

// menu.classList.toggle('ativo'); //{Se não existir adiciona, se existir remove.}

const contem = menu.classList.contains('ativo'); //true or false.
//console.log(contem);

menu.classList.replace('ativo', 'inativo');

// atributes - retorna um array-like com os atributos 

const animais = document.querySelector('.animais');
//console.log(animais.attributes[1]);

/* get  , set
   getAttribute - pegar
   setAttribute - setar/atribuir
*/

/*
mg = document.querySelector('img');
//console.log(img);
console.log(img.getAttribute('src'));
console.log(img.setAttribute('alt', 'Texto alinhado'));

//const possui = img.hasAttribute('')
//console.log(possui);

img.removeAttribute('alt');
*/

/*  Read Only e Writable
    Propriedades que permitem alteração.
    Propriedades somente de leitura.
*/

const meusAnimais = document.querySelector('.animais');
//console.log(meusAnimais);

/*
console.log(meusAnimais.className);
meusAnimais.className='azul'; //substitui completamente
meusAnimais.className+=' vermelho';
meusAnimais.attributes = 'class=""'
*/

//objeto.propriedades
//adicione a classe ativo a todos os itens do menu;

const itensMenu = document.querySelectorAll('.menu a');
//console.log(itensMenu);

itensMenu.forEach((item)=>{
  item.classList.add('ativo');
});

//remova a classe ativo de todos os itense mantenha apenas no primeiro;

itensMenu.forEach((item)=>{
  item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

//verifique se as imagens possuem o atributo alt;

const pegarImagens = document.querySelectorAll('img');
pegarImagens.forEach((img)=>{
  const possuiAlt = img.hasAttribute('alt');
  //console.log(img, possuiAlt);
});

//modifique o href do link externo no menu = bri.ifsp.edu.br >> www.google.com.br;

const link = document.querySelector('a[href^="https"]');
link.setAttribute('href', 'https://www.google.com.br');
//console.log(link);


function initscrollSuave(){
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