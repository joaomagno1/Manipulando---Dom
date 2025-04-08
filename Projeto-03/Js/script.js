// Elementos do DOM

// getElementByid = seleciona um elemento do DOM.

const selecaoAnimais = document.getElementById('animais');
// console.log(selecaoAnimais);

// getElementsByClassName = seleciona e retorna uma lista do elemento.

const gridAnimais = document.getElementsByClassName('grid-section');
//console.log(gridAnimais);

const listaContato = document.getElementsByClassName('grid-contato')
//console.log(listaContato);

//getElementByTagName

const ul = document.getElementsByTagName('ul');
//console.log(ul[n]) n = elementos da sua lista;

// querySelector - pega a primeira ocorrência.

const animais =document.querySelector('.animais');
//console.log(animais);

const animaisDescricao = document.querySelector('.animais-descricao');
//console.log(animaisDescricao);

const contato = document.querySelector('#contato');
//console.log(contato);

const primeiraUl = document.querySelector('ul');
//console.log(primeiraUl);

const link = document.querySelector('[href^="#"]');
//console.log(link);

// Seletor geral

//querySelectorAll - retorna todos os elementos compatíveis
//com seletor css em uma NodeList

const gridSection = document.querySelectorAll('.grid-section');
//console.log(gridSection);

const lista = document.querySelectorAll('ul');
//console.log(lista);

const titulos = document.querySelectorAll('.titulo');
//console.log(titulos);

// htmlCollection
const gridSelectionHtml = document.getElementsByClassName('grid-section');
//console.log(gridSelectionHtml);
//gridSelectionHtml.forEach(Element => { });

// NodeList
const gridSelectionNode = document.querySelectorAll('.grid-section');
//console.log(gridSelectionNode);

// estática


// as duas são Array-like
// array nodelist -foreach

/*gridSelectionNode.forEach(function(gridItem, index, array){
  gridItem.classList.add('vermelho');
  console.log(index);
  console.log(array);
})*/

// Retornar no console todas as imagens do site

const retornaImg = document.querySelectorAll('img');
//console.log(retornaImg);

// Retorne no console apenas as imagens que começam com a palavra imagem
const todasImagens = document.querySelectorAll('img[src^="img/imagem"]');
//console.log(todasImagens);


// selecione todos os links internos do site (onde o href começa com #)

const linkHref = document.querySelectorAll('[href^="#"]');
//console.log(linkHref);   

//Selecione o primeiro h2 dentro de .animais-descricao
const animaiss = document.querySelector('.animais-descricao');
const h2animais = animaiss.querySelector('h2');
//console.log(h2animais);











