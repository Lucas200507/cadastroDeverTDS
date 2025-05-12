
// Adiciona um evento ao cadastroForm por meio do JS
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
  // Cancela um elemento caso seja cancelável
  // Por exemplo: clicar no botão "Enviar" impede o envio de um formulário
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;  
  const telefone = document.getElementById('telefone').value;

  const lista = document.getElementById('listaUsuarios');
  // variavel item é criado como uma li
  const item = document.createElement('li');
  // item recebe o texto: c/ as variaveis: Nome, Email e telefone
  item.textContent = "Nome: "+ nome +" | Email: "+email+" | Telefone: "+telefone;
  // Lista na lista (listaUsuarios) o 'item'; Funciona com <p>/<li>/<h$>
  lista.appendChild(item);

  // Limpar formulário
  document.getElementById('cadastroForm').reset();
});

// \n
