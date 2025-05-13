function atualizarNome() {
  // Declara uma variavel nome, onde recebe o valor do id = novoNome;
  let nome = document.getElementById('novoNome').value; 
  // Insere o texto no elemento com o id = resultado;
  document.getElementById('resultado').textContent = "Nome atual: " + nome;
}
