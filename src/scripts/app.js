const parcelas = [
  {
    text: "1x",
    value: 1,
  },
  {
    text: "2x",
    value: 2,
  },
  {
    text: "3x",
    value: 3,
  },
  {
    text: "4x",
    value: 4,
  },
  {
    text: "5x",
    value: 5,
  },
  {
    text: "6x",
    value: 6,
  },
  {
    text: "7x",
    value: 7,
  },
  {
    text: "8x",
    value: 8,
  },
  {
    text: "9x",
    value: 9,
  },
  {
    text: "10x",
    value: 10,
  },
  {
    text: "11x",
    value: 11,
  },
  {
    text: "12x",
    value: 12,
  },
];

async function getBrands() {
  const resposta = await fetch("http://localhost:3000/brands").then(
    (resposta) => resposta.json()
  );

  let selectBandeiras = document.getElementById("bandeiras");

  resposta.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.code;
    opt.text = option.name;
    selectBandeiras.appendChild(opt);
  });
}

function getInstallments(parcelas) {
  let selectParcelas = document.getElementById("qtde_parcelas");

  parcelas.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.text;
    selectParcelas.appendChild(opt);
  });
}

function formatarMoeda(input) {
  let value = input.value;
  if (value !== "") {
    value = parseFloat(value);
    input.value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}

document
  .getElementById("valor__venda")
  .addEventListener("change", function (e) {
    formatarMoeda(e.target);
  });

window.onload = () => {
  getBrands();
  getInstallments(parcelas);
};

const simularVendaBtn = document.getElementById("simular-venda-btn");

simularVendaBtn.addEventListener("click", async function (event) {
  event.preventDefault();

  const valorVenda = document
    .getElementById("valor__venda")
    .value.replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".");
  const parcelas = document.getElementById("qtde_parcelas").value;
  const bandeira = document.getElementById("bandeiras").value;

  const valorParcela = parseFloat(valorVenda) / parseFloat(parcelas);
  const simulacao = {
    valorVenda,
    parcelas,
    bandeira,
    valorParcela,
  };
  const options = {
    method: "POST", // Método HTTP
    headers: {
      "Content-Type": "application/json", // Tipo de conteúdo
    },
    body: JSON.stringify(simulacao), // Corpo da requisição em formato JSON
  };
  const resposta = await fetch("http://localhost:3000/simulate", options).then(
    (resposta) => resposta.json()
  );
  if (resposta.is_success === true) {
    localStorage.setItem(
      "simulacao",
      JSON.stringify({ ...resposta, simulacao })
    );

    window.location.replace("simulador.html");
  } else {
    alert("Erro ao simular venda");
  }
});
