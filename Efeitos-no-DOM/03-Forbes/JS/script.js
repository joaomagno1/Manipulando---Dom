const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmeSenha = document.getElementById("confirmeSenha");
const telefone = document.getElementById("telefone");
const data = document.getElementById("data");

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  validarDadosDeEntrada();
});

const sucessMessage = (input, message)=> {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

const errorMessage = (input, message)=> {
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');
  formControl.className = "form-control error";
  span.innerText = message;
  console.log(span);
}

const sucessSubmit = () => {
  let form_control = document.getElementsByClassName('form-control');
  let count = form_control.length;
  let soma = 0;
  for (let i = 0; i < form_control.length; i++) {
    if (form_control[i].className === 'form-control success') {
      soma = 0 + 1;
    }
  }
  sendData(count, soma);
}

function sendData(count, soma) {
  if (count === soma){
    console.log("Dados enviados com sucesso!");
  }
}

function validarDadosDeEntrada(){
  // Verifica se o campo nome está vazio
  if (nome.value.trim() === ""){
    errorMessage(nome, "O nome é obrigatório");
  }
  else{
    sucessMessage(nome);
  }

  // Verifica se o campo email está vazio
  if(email.value.trim() === ""){
    errorMessage(email, "O email é obrigatório");
  }
  else{
    sucessMessage(email);
  }

  // Verifica se o campo senha está vazio
  if(senha.value.trim() === ""){
    errorMessage(senha, "A senha é obrigatória");
  }
  else{
    sucessMessage(senha);
  }
  
  // Verifica se o campo confirmeSenha está vazio
  if(confirmeSenha.value.trim() === ""){
    errorMessage(confirmeSenha, "Por favor, confirme sua senha");
  }
  else {
    sucessMessage(confirmeSenha);
  }

  // Verifica se o campo telefone está vazio
  if(telefone.value.trim() === ""){
    errorMessage(telefone, "O telefone é obrigatório");
  }
  else{
    sucessMessage(telefone);
  }

  // Verifica se o campo data está vazio
  if(data.value.trim() === ""){
    errorMessage(data, "A data é obrigatória");
  }
  else{
    sucessMessage(data);
  }

sucessSubmit();
}


