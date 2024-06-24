// Array de objetos representando as parcelas disponíveis
const parcelas = [
  { text: "1x", value: 1 },
  { text: "2x", value: 2 },
  { text: "3x", value: 3 },
  { text: "4x", value: 4 },
  { text: "5x", value: 5 },
  { text: "6x", value: 6 },
  { text: "7x", value: 7 },
  { text: "8x", value: 8 },
  { text: "9x", value: 9 },
  { text: "10x", value: 10 },
  { text: "11x", value: 11 },
  { text: "12x", value: 12 },
];

// Função para buscar as bandeiras
async function getBrands() {
  // Requisição GET para o endpoint "brands" e espera a resposta
  const resposta = await fetch("http://localhost:3000/brands").then(
    (resposta) => resposta.json()
  );

  // Seleciona o elemento <select> onde as marcas serão adicionadas
  let selectBandeiras = document.getElementById("bandeiras");

  // Itera sobre cada marca recebida na resposta e cria um <option> para cada uma
  resposta.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.code; // Define o valor do <option>
    opt.text = option.name; // Define o texto do <option>
    selectBandeiras.appendChild(opt); // Adiciona o <option> ao <select>
  });
}

// Função para preencher o <select> das parcelas
function getInstallments(parcelas) {
  // Seleciona o elemento <select> onde as parcelas serão adicionadas
  let selectParcelas = document.getElementById("qtde__parcelas");

  // Itera sobre cada parcela no array e cria um <option> para cada uma
  parcelas.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value; // Define o valor do <option>
    opt.textContent = option.text; // Define o texto do <option>
    selectParcelas.appendChild(opt); // Adiciona o <option> ao <select>
  });
}

// Função para formatar o valor como moeda brasileira
function formatarMoeda(input) {
  let value = input.value;
  if (value !== "") {
    value = parseFloat(value); // Converte o valor para um número float
    input.value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }); // Formata o número como moeda BRL
  }
}

// Adiciona um event listener ao campo de valor de venda para formatar o valor ao mudar
document
  .getElementById("valor__venda")
  .addEventListener("change", function (e) {
    formatarMoeda(e.target); // Chama a função para formatar o valor
  });

// Executa funções ao carregar a janela
window.onload = () => {
  getBrands(); // Chama a função para preencher as bandeiras
  getInstallments(parcelas); // Chama a função para preencher as parcelas
};

// Seleciona o botão de simular venda
const simularVendaBtn = document.getElementById("btn__simularVenda");

// Adiciona um event listener ao botão de simular venda para executar a simulação
simularVendaBtn.addEventListener("click", async function (event) {
  event.preventDefault(); // Previne o comportamento padrão do botão

  // Obtém e formata o valor da venda
  const valorVenda = document
    .getElementById("valor__venda")
    .value.replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".");
  const parcelas = document.getElementById("qtde__parcelas").value; // Obtém o número de parcelas selecionado
  const bandeira = document.getElementById("bandeiras").value; // Obtém a bandeira selecionada

  // Calcula o valor de cada parcela
  const valorParcela = parseFloat(valorVenda) / parseFloat(parcelas);
  const simulacao = {
    valorVenda,
    parcelas,
    bandeira,
    valorParcela,
  };

  // Define as opções da requisição POST
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(simulacao),
  };

  // Faz a requisição POST para o endpoint "simulate" e espera a resposta
  const resposta = await fetch("http://localhost:3000/simulate", options).then(
    (resposta) => resposta.json()
  );

  // Verifica se a simulação foi bem-sucedida
  if (resposta.is_success === true) {
    // Armazena os dados da simulação no localStorage
    localStorage.setItem(
      "simulacao",
      JSON.stringify({ ...resposta, simulacao })
    );

    // Redireciona para a página de simulação
    window.location.replace("simulador.html");
  } else {
    alert("Erro ao simular venda"); // Mostra uma mensagem de erro se a simulação falhar
  }
});
