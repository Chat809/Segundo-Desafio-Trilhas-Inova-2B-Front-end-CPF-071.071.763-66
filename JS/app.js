document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const campos = {
            nome: document.getElementById("nome"),
            nascimento: document.getElementById("data-nascimento"),
            cpf: document.getElementById("cpf"),
            sexo: document.getElementById("sexo"),
            email: document.getElementById("email"),
            telefone: document.getElementById("telefone"),
            cep: document.getElementById("cep"),
            rua: document.getElementById("rua"),
            numero: document.getElementById("numero"),
            trilha: document.querySelector('input[name="trilha"]:checked'),
            termos: document.getElementById("termos"),
            documento: document.getElementById("documento"),
            comprovante: document.getElementById("comprovante"),
            usuario: document.getElementById("user-id"),
            senha: document.getElementById("senha")
        };

        const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const telRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;
        const cepRegex = /^\d{5}-?\d{3}$/;

        let valido = true;
        let mensagens = [];

        for (let key in campos) {
            if (campos[key] === null || campos[key].value === "") {
                mensagens.push(`O campo ${key} é obrigatório.`);
                valido = false;
            }
        }

        if (!emailRegex.test(campos.email.value)) {
            mensagens.push("E-mail inválido.");
            valido = false;
        }

        if (!cpfRegex.test(campos.cpf.value)) {
            mensagens.push("CPF inválido. Use o formato XXX.XXX.XXX-XX.");
            valido = false;
        }

        if (!telRegex.test(campos.telefone.value)) {
            mensagens.push("Telefone inválido. Use o formato (XX) XXXXX-XXXX.");
            valido = false;
        }

        if (!cepRegex.test(campos.cep.value)) {
            mensagens.push("CEP inválido. Use o formato XXXXX-XXX.");
            valido = false;
        }

        if (!campos.trilha) {
            mensagens.push("Selecione uma trilha de aprendizagem.");
            valido = false;
        }

        if (!campos.termos.checked) {
            mensagens.push("Você deve aceitar os termos e condições.");
            valido = false;
        }

        if (!valido) {
            alert(mensagens.join("\n"));
            return;
        }

        const dados = {
            nome: campos.nome.value,
            nascimento: campos.nascimento.value,
            cpf: campos.cpf.value,
            sexo: campos.sexo.value,
            email: campos.email.value.toLowerCase(),
            telefone: campos.telefone.value,
            cep: campos.cep.value,
            rua: campos.rua.value,
            numero: campos.numero.value,
            trilha: campos.trilha.value,
            usuario: campos.usuario.value,
            senha: campos.senha.value
        };

        localStorage.setItem("formularioInscricao", JSON.stringify(dados));

        alert("Inscrição realizada com sucesso!");
        window.location.href = "login.html";
        form.reset();
    });
});
