"use strict";

var jurosPorBoleto = 0.0299;
var jurosPorParcela = 0.0349;
var calculado = false;

function gerarParcelas() {
  var valor = parseFloat(document.getElementById("valor-total").value);
  console.log(valor);

  for (var parcela = 2; parcela <= 12; parcela++) {
    var valor01 = valor + valor * jurosPorBoleto;
    console.log(valor01);
    var valor02 = valor01 + valor01 * jurosPorParcela;
    console.log(valor02);
    var valor03 = valor02 / parcela;
    console.log(valor03);
    var valor04 = valor03 * jurosPorParcela;
    console.log(valor04);
    var valor05 = valor04 + valor02;
    console.log(valor05);
    var valor06 = valor05 / parcela;
    console.log(valor06);
    var node = document.createElement("li");
    node.setAttribute("class", "list-group-item ");
    var textnode = document.createTextNode(parcela + "\tx \t" + parseFloat(valor06).toFixed(2) + "\tTotal de R$" + parseFloat(valor05).toFixed(2));
    node.appendChild(textnode);
    document.getElementById("parcelas").appendChild(node);
  }
}
