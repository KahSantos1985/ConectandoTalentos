import Data from "./Data/Data.js";

var agora = new Data();
var nomeUser = sessionStorage.getItem("nomeContrat"); // Ajuste para o nome correto no sessionStorage

function inicializacao() {
    var hora = agora.getHoras();
    var saudacao = "";

    // Determinando saudação com base no horário
    if (hora >= 0 && hora <= 6) {
        saudacao = "Boa madrugada, " + nomeUser + "!";
    } else if (hora > 6 && hora <= 12) {
        saudacao = "Bom dia, " + nomeUser + "!";
    } else if (hora > 12 && hora <= 18) {
        saudacao = "Boa tarde, " + nomeUser + "!";
    } else {
        saudacao = "Boa noite, " + nomeUser + "!";
    }

    // Exibindo a saudação no elemento com ID "saudacao"
    const saudacaoElement = document.getElementById("saudacao");
    if (saudacaoElement) {
        saudacaoElement.innerHTML = saudacao;
    }

    // Função para exibir data e hora atualizada a cada segundo
    function mostrarData() {
        const dataElement = document.getElementById("data");
        if (dataElement) {
            dataElement.innerHTML = agora.getDiaSemanaComDataNumeral() + " " + agora.getHorasMinutos();
        }
    }

    setInterval(mostrarData, 1000);

    // Exibindo o nome do usuário no menu dropdown
    const dropdownElement = document.getElementById("dropdownNomeUser");
    if (dropdownElement) {
        dropdownElement.innerHTML = nomeUser;
    }
}

const content = document.querySelector(".content-principal");

function carregarConteudo(conteudo) {
    content.innerHTML = conteudo;
}

inicializacao();
