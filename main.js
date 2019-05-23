var jurosPorBoleto = 0.0299;
var jurosPorParcela = 0.0349;
var calculado = false;



function escreverNaTela(parcela,numero01, numero02) {
    let node = document.createElement("li");
    node.setAttribute("class",  "list-group-item ")
    let textnode = document.createTextNode(parcela + "\tx \t" + parseFloat(numero01).toFixed(2) +"\tTotal de R$" + parseFloat(numero02).toFixed(2));
        
    node.appendChild(textnode);
    document.getElementById("parcelas").appendChild(node);   
}

function gerarParcelas(){

    var valor = parseFloat(document.getElementById("valor-total")
    .value);
    console.log(valor);

    let valor01 = valor + (valor * jurosPorBoleto);
    console.log(valor01);

    escreverNaTela(1, valor01,valor01);
 

    for (let parcela = 2; parcela <= 12; parcela++) {

        let valor01 = valor + (valor * jurosPorBoleto);
        console.log(valor01);

        let valor02 = valor01+(valor01 * jurosPorParcela);
        console.log(valor02);
        
        let valor03 = valor02 / parcela;
        console.log(valor03);
        
        let valor04 = valor03 * (jurosPorParcela);
        console.log(valor04);

        let valor05 = valor04 + valor02;
        console.log(valor05);

        let valor06 = valor05 / parcela;
        console.log(valor06);

        escreverNaTela(parcela, valor06, valor05);     
      
    }
}