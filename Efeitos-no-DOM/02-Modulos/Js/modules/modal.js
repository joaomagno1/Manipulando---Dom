export default function initModal(){
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function abrirModal(e){
    e.preventDefault();
    containerModal.classList.add('ativo');
  };

  function fecharModal(e){
    containerModal.classList.remove('ativo');
  };

  function cliqueForaDoModal(e){
    console.log(e.target);
    if (e.target === this){
      fecharModal(e);
    }
  };

  botaoAbrir.addEventListener('click',abrirModal);
  botaoFechar.addEventListener('click',fecharModal);
  containerModal.addEventListener('click',cliqueForaDoModal);
};

