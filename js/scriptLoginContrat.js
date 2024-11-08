const formContratLogin = document.querySelector("#login-contrat");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

function clickLogin(event) {  // Adicionado 'event' como parâmetro
    event.preventDefault();
    
    if (email.value.length >= 5 && senha.value.length >= 8) {  // Ajustado comprimento mínimo do email
        loginContrat();
    } else {
        const div = document.querySelector(".status");
        div.innerHTML = '<div class="alert alert-danger" role="alert">Digite seus dados corretamente.</div>';
        let log = {
            email: email.value.length,
            senha: senha.value.length
        };
        console.log(log);
    }
}

function loginContrat() {
    const url = `http://localhost:8080/contratante/login/${email.value}/${senha.value}`;
    fetch(url)
    .then(response => {
        if (!response.ok) {  // Verifica se a resposta foi bem-sucedida
            throw new Error("Email ou senha incorretos");
        }
        return response.json();
    })
    .then(data => {
        if (data && data.id_prestador) {  // Verifica se os dados foram retornados corretamente
            sessionStorage.setItem("idPrest", data.id_prestador);
            sessionStorage.setItem("nomePrest", data.nome);
            sessionStorage.setItem("sobrenomePrest", data.sobrenome);
            sessionStorage.setItem("celularPrest", data.celular);
            sessionStorage.setItem("emailPrest", data.email);
            sessionStorage.setItem("senhaPrest", data.senha);
            sucessoLogin();
            setTimeout(redirecionarHome, 2000);  // Corrigido para 'setTimeout'
        } else {
            throw new Error("Email ou senha incorretos");
        }
    })
    .catch(error => {
        console.error(error);
        const div = document.querySelector(".status");
        div.innerHTML = '<div class="alert alert-danger" role="alert">Email ou senha incorretos.</div>';
        let log = {
            email: email.value,
            senha: senha.value
        };
        console.log(log);
    });
}

function sucessoLogin() {
    const div = document.querySelector(".status");
    div.innerHTML = '<div class="alert alert-success" role="alert">Login realizado com sucesso! Você será redirecionado.</div>';
}

function redirecionarHome() {
    window.location.replace("http://127.0.0.1:5500/app/homec.html");
}

formContratLogin.addEventListener("submit", clickLogin);
