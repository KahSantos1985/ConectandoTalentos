import Data from "./Data/Data.js";

var agora = new Data();
var nomeUser = sessionStorage.getItem("nomePrest"); // Confirme que a chave é a correta
const content = document.querySelector(".content-principal");

function inicializacao() {
    var hora = agora.getHoras();
    var saudacao = "";
    
    // Definindo a saudação
    if (hora >= 0 && hora <= 6) {
        saudacao = "Boa madrugada, " + nomeUser + "!";
    } else if (hora >= 6 && hora <= 12) {
        saudacao = "Bom dia, " + nomeUser + "!";
    } else if (hora >= 12 && hora <= 18) {
        saudacao = "Boa tarde, " + nomeUser + "!";
    } else {
        saudacao = "Boa noite, " + nomeUser + "!";
    }
    
    // Exibindo saudação e nome do usuário
    const saudacaoElement = document.getElementById("saudacao");
    if (saudacaoElement) {
        saudacaoElement.innerHTML = saudacao;
    }

    // Função para atualizar a data e hora
    function mostrarData() {
        const dataElement = document.getElementById("data");
        if (dataElement) {
            dataElement.innerHTML = agora.getDiaSemanaComDataNumeral() + " " + agora.getHorasMinutos();
        }
    }
    
    setInterval(mostrarData, 1000);

    // Exibindo o nome do usuário no dropdown
    const dropdownElement = document.getElementById("dropdownNomeUser");
    if (dropdownElement) {
        dropdownElement.innerHTML = nomeUser;
    }
}

inicializacao();

// Conteúdos de Home e Adicionar Serviço
const homePrest = `
    <div class="content-home">
        <h5 class="title-funcao">Home</h5>
        <hr>
        <div class="content-funcao-home">
            <p class="text-home">Essa é sua Home, em breve ela terá mais informações...</p>
        </div>
    </div>`;

const addService = `
    <div class="content-addService">
        <h5 class="title-funcao">Adicionar Serviço</h5>
        <hr>
        <div class="content-funcao">
            <div class="row align-items-md-center">
                <div class="col disabled"></div>
                <div class="col-md-6">
                    <div class="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
                        <form class="addService-col">
                            <div class="mb-3">
                                <label for="nome_servico" class="form-label">Serviço:</label>
                                <select class="form-select" id="nome_servico">
                                    <option selected>Selecione o serviço</option>
                                    <option value="Pedreiro">Pedreiro</option>
                                    <option value="Eletricista">Eletricista</option>
                                    <option value="Hidráulica">Hidráulica</option>
                                    <option value="Professor Particular">Professor particular</option>
                                    <option value="Outro">Outros...</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="inputDescricao" class="form-label">Descrição:</label>
                                <textarea class="form-control" id="inputDescricao" placeholder="Descreva seu serviço aqui..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Adicionar</button>
                        </form>
                    </div>
                </div>
                <div class="col disabled"></div>
            </div>
        </div>
    </div>`;

carregarConteudo(homePrest);

// Menu lateral e mudança de conteúdo
const homeSidebar = document.querySelector("#homeSystem");
const addServiceSidebar = document.querySelector("#addService");

function carregarConteudo(conteudo) {
    content.innerHTML = conteudo;
}

addServiceSidebar.addEventListener("click", () => {
    carregarConteudo(addService);
    homeSidebar.classList.remove("active");
    addServiceSidebar.classList.add("active");
});

homeSidebar.addEventListener("click", () => {
    carregarConteudo(homePrest);
    addServiceSidebar.classList.remove("active");
    homeSidebar.classList.add("active");
});
