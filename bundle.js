"use strict";

//desabilita o botão no início
document.getElementById("botao").disabled = true; //cria um event listener que escuta mudanças no input

document.getElementById("valor-total").addEventListener("input", function (event) {
  //busca conteúdo do input
  var conteudo = document.getElementById("valor-total").value; //valida conteudo do input 

  if (conteudo !== null && conteudo !== '') {
    //habilita o botão
    document.getElementById("botao").disabled = false;
  } else {
    //desabilita o botão se o conteúdo do input ficar em branco
    document.getElementById("botao").disabled = true;
  }
});

function escreverNaTela(parcela, numero01, numero02) {
  var node = document.createElement("li");
  node.setAttribute("class", "list-group-item ");
  var textnode = document.createTextNode(parcela + "\tx \t" + parseFloat(numero01).toFixed(2) + "\tTotal de R$" + parseFloat(numero02).toFixed(2));
  node.appendChild(textnode);
  document.getElementById("parcelas").appendChild(node);
}

function gerarParcelas() {
  if (calculado) {
    window.location.reload(true);
  }

  calculado = true;
  var juros = parseFloat(document.getElementById("juros").value);
  juros = juros / 100;
  var meses = parseFloat(document.getElementById("meses").value);
  var valor = parseFloat(document.getElementById("valor-total").value);
  var jurosDaCompra = valor * juros * meses;
  var compra = valor + jurosDaCompra;
  var parcela = compra / meses;
  escreverNaTela(meses, parcela, compra);
  var botao = document.getElementById("botao");
  botao.innerHTML = "resetar";
}
