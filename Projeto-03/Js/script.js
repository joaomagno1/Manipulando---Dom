/*foreach e arrow functions
a melhor maneira de selecionar é com queryselectior
metodo foreach
*/

const imgs = document.querySelectorAll('img')
//três parâmetros valor atual, posição, array

imgs.forEach(function(item, index){
  //console.log(item);
  //console.log(index);
  //console.log(array);
});

//foreach é array, e é um método do array // array-like não é um array, mas é possivel converter
const titulos = document.getElementsByClassName('titulo');
//console.log(titulos);
const titulosArray = Array.from(titulos);
titulosArray.forEach(function(item){
  //console.log(item);
});


