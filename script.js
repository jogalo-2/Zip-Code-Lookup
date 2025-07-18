function buscarCEP() {
  var cep = document.getElementById("cepInput").value.replace(/\D/g, '');
  var resultado = document.getElementById("resultado");

  if (cep.length !== 8) {
    resultado.innerText = "CEP inválido. Digite 8 números.";
    return;
  }

  fetch("https://viacep.com.br/ws/" + cep + "/json/")
    .then(function(resposta) {
      return resposta.json();
    })
    .then(function(dados) {
      if (dados.erro) {
        resultado.innerText = "CEP não encontrado.";
      } else {
        resultado.innerHTML =
          "<p><strong>Rua:</strong> " + dados.logradouro + "</p>" +
          "<p><strong>Bairro:</strong> " + dados.bairro + "</p>" +
          "<p><strong>Cidade:</strong> " + dados.localidade + "</p>" +
          "<p><strong>Estado:</strong> " + dados.uf + "</p>";
      }
    })
    .catch(function() {
      resultado.innerText = "Erro ao buscar o CEP.";
    });
}

function alternarModo() {
  document.body.classList.toggle("dark-mode");
}
