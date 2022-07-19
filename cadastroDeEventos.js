function dataDoEvento() {
    let hoje = new Date();
    let mesAtual = ((hoje.getMonth() + 1));
    let diaAtual = hoje.getDate();
    let diaDoEvento = parseInt(window.prompt('Digite o dia do evento, por favor.'));
    let mesDoEvento = parseInt(window.prompt('Digite o mês do evento, por favor.'));
    if (mesAtual < mesDoEvento) {
        definirQuantidade();
    } else if (mesAtual > mesDoEvento) {
        document.getElementById("h1").innerHTML = 'O cadastro não é permitido porque a data informada é inválida.'
        trocarEstilo();
    } else if (diaAtual < diaDoEvento) {
        definirQuantidade();
    } else {
        document.getElementById("h1").innerHTML = 'O cadastro não é permitido porque a data informada é inválida.'
        trocarEstilo();
    }
}

function trocarEstilo(){
    document.getElementById("h1").style.fontSize = '30pt';
    document.getElementById("h1").style.width = '1000px';
    document.getElementById("h1").style.height = '150px';
    document.getElementById("h1").style.backgroundColor = 'yellow';
    document.getElementById("h1").style.color = 'blue';
    document.getElementById("h1").style.fontWeight = '400';
    document.getElementById("h1").style.border = 'solid'&&'3px'&&'solid';
    document.getElementById("botao").style.display = 'none';
}

function definirQuantidade() {
    let quantidadeDeParticipantes = parseInt(window.prompt('Informe a quantidade de participantes do evento, por favor.'));
    if (quantidadeDeParticipantes < 100) {
        adicionarALista();
    } else {
        document.getElementById("h1").innerHTML = 'O cadastro não é permitido porque a quantidade de participantes excede o limite de 99 pessoas.'
        trocarEstilo();
    }
    function adicionarALista() {
        let i = 0;
        let listaParticipantes = [];
        while (i < quantidadeDeParticipantes) {
            let nomeParticipante = window.prompt('Digite o nome do participante.');
            let idadeParticipante = parseInt(window.prompt('Digite a idade desse participante.'));
            if (idadeParticipante >= 18) {
                listaParticipantes.push(nomeParticipante);
                console.log(listaParticipantes);
                window.alert('Esse participante foi adicionado à lista do evento.')
            } else {
                window.alert('O cadastro desse participante não é permitido porque ele é menor de idade.');
            }
            i++;

        }
        document.write('<h1> Lista de participantes do evento: </h1>' + '<h2>' + listaParticipantes);
        document.getElementById('botao').style.display = 'none';
    }

}










