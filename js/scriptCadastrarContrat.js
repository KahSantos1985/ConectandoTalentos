const formPrest = document.querySelector("#cadastro-prest");  // Corrigido o ID
const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const celular = document.querySelector("#celular");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

function onlyNumbers() {
    celular.value = celular.value.replace(/[^0-9]/g, ''); // Correção para remover caracteres não numéricos
}

function clickCadastrar(event) {  // Adicionado 'event' como parâmetro
    event.preventDefault();

    if (nome.value.length >= 3 && sobrenome.value.length >= 2 && celular.value.length >= 10 && email.value.length >= 5 && senha.value.length >= 8) {  // Corrigido o operador '&&'
        cadastrarPrest();
    } else {
        const div = document.querySelector(".status");
        div.innerHTML = '<div class="alert alert-danger" role="alert">Algum campo não foi preenchido corretamente!</div>';
        let log = {
            nome: nome.value.length,
            sobrenome: sobrenome.value.length,
            celular: celular.value.length,
            email: email.value.length,
            senha: senha.value.length
        };
        console.log(log);
    }
}

function cadastrarPrest() {
    fetch("http://localhost:8080/contratante/cadastrar", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: nome.value,
            sobrenome: sobrenome.value,
            celular: celular.value,
            email: email.value,
            senha: senha.value
        })
    })
    .then(function (res) {
        console.log(res);
        if (res.ok) {
            sucessoCadastro();
            setTimeout(redirecionarlogin, 6000);  // Alterado para setTimeout
        }
    })
    .catch(function (res) {
        console.log(res);
    });

    limpar();
}

function limpar() {
    nome.value = "";
    sobrenome.value = "";
    celular.value = "";
    email.value = "";
    senha.value = "";
}

function sucessoCadastro() {
    const div = document.querySelector(".status");
    div.innerHTML = '<div class="alert alert-success" role="alert">Usuário cadastrado com sucesso! Você será redirecionado para fazer login.</div>';
}

function redirecionarlogin() {
    window.location.replace("http://127.0.0.1:5500/login/loginc.html");
}

celular.addEventListener("input", onlyNumbers);
formPrest.addEventListener("submit", clickCadastrar);
