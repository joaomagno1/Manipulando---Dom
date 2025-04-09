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

console.log(meusAnimais.className);
meusAnimais.className='azul'; //substitui completamente
meusAnimais.className+=' vermelho';
meusAnimais.attributes = 'class=""'

//objeto.propriedades

//adicione a classe ativo a todos os itens do menu;

//remova a classe ativo de todos os itens
//mantenha apenas no primeiro;

//verifique se as imagens possuem o atributo alt;



