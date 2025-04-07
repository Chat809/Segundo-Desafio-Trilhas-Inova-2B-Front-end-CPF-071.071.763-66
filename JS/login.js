document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const loginId = document.getElementById("login-id").value;
        const loginSenha = document.getElementById("login-senha").value;

        const dadosSalvos = JSON.parse(localStorage.getItem("formularioInscricao"));

        if (!dadosSalvos) {
            alert("Nenhum usuário cadastrado. Faça o cadastro primeiro.");
            window.location.href = "index.html";
            return;
        }

        if (
            loginId === dadosSalvos.usuario &&
            loginSenha === dadosSalvos.senha
        ) {
            alert("Login realizado com sucesso!");
            window.location.href = "dashboard.html";
        } else {
            alert("ID do usuário ou senha inválidos.");
        }
    });
});
