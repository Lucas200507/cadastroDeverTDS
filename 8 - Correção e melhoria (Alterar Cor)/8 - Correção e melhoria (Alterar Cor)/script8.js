function mudarCor() {
  // declara a variável cor, a qual seu valor poderá ser alterado, pois é um let.
  let cor = document.getElementById('corSelecionada').value;
  // No documento, altere a cor do texto pelo id = texto;
  document.getElementById('texto').style.color = cor; 
}

