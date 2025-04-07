document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("perfil-container");
    const dados = JSON.parse(localStorage.getItem("formularioInscricao"));

    if (!dados) {
        container.innerHTML = "<p>Nenhum dado encontrado. Faça login novamente.</p>";
        return;
    }

    const campos = {
        "Nome completo": dados.nome,
        "Data de nascimento": dados.nascimento,
        "CPF": dados.cpf,
        "Sexo": dados.sexo,
        "E-mail": dados.email,
        "Telefone": dados.telefone,
        "CEP": dados.cep,
        "Rua": dados.rua,
        "Número": dados.numero,
        "Trilha de aprendizagem": dados.trilha,
        "ID do usuário": dados.usuario
    };

    for (let chave in campos) {
        const item = document.createElement("div");
        item.classList.add("perfil-item");

        item.innerHTML = `
            <label>${chave}</label>
            <span>${campos[chave]}</span>
        `;

        container.appendChild(item);
    }
});

function logout() {
    localStorage.removeItem("formularioInscricao");
    window.location.href = "login.html";
}
