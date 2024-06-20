// // document.addEventListener("DOMContentLoaded", function () {
// //   const values = localStorage.getItem("simulacao");
// //   const simulationData = JSON.parse(values);

// //   if (simulationData) {
// //     simulationData.data.brand_simulation.forEach((item) => {
// //       const tr = document.createElement("tr");

// //       // Criando elemento td para a imagem da bandeira
// //       const td_img = document.createElement("td");
// //       const img_bandeira = document.createElement("img");

// //       // Definindo atributos da imagem
// //       img_bandeira.src = item.image;
// //       img_bandeira.alt = item.brand;

// //       // Adicionando a imagem como filho do td_img
// //       td_img.appendChild(img_bandeira);

// //       // Criando os elementos td para os demais dados
// //       const td_tax = document.createElement("td");
// //       const td_tax_percent = document.createElement("td");
// //       const valor_venda = document.createElement("td");
// //       const valor_taxa = document.createElement("td");

// //       // Definindo o conteúdo dos td com base nos dados da simulação
// //       const taxPercent = item.tax; // Percentual da taxa
// //       const taxAmount = item.tax_amount / 100; // Valor da taxa em centavos para reais
// //       const saleValue = parseFloat(simulationData.simulacao.valorVenda); // Utilizando o valor da venda total

// //       td_tax_percent.textContent = `${taxPercent.toFixed(2)}%`; // Exibir percentual da taxa
// //       td_tax.textContent = taxAmount.toLocaleString("pt-BR", {
// //         style: "currency",
// //         currency: "BRL",
// //       }); // Exibir valor da taxa em reais

// //       valor_venda.textContent = saleValue.toLocaleString("pt-BR", {
// //         style: "currency",
// //         currency: "BRL",
// //       });

// //       // Calculando valor_taxa como a soma de valor_venda e taxAmount
// //       const totalValue = saleValue + taxAmount;

// //       valor_taxa.textContent = totalValue.toLocaleString("pt-BR", {
// //         style: "currency",
// //         currency: "BRL",
// //       });

// //       // Adicionando os elementos td à linha (tr)
// //       tr.appendChild(td_img);
// //       tr.appendChild(td_tax_percent);
// //       tr.appendChild(td_tax);
// //       tr.appendChild(valor_venda);
// //       tr.appendChild(valor_taxa);

// //       // Adicionando a linha à tabela (tbody)
// //       document.getElementById("tabela").appendChild(tr);
// //     });
// //   } else {
// //     console.error("Nenhuma simulação encontrada no localStorage");
// //   }

// //   // Selecionando o botão "Voltar" e adicionando um evento de clique
// //   const btnVoltar = document.getElementById("btn-voltar");
// //   if (btnVoltar) {
// //     btnVoltar.addEventListener("click", function () {
// //       // Redirecionando para a página inicial (index.html)
// //       window.location.href = "home.html";
// //     });
// //   } else {
// //     console.error("Botão 'Voltar' não encontrado.");
// //   }
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   const values = localStorage.getItem("simulacao");
//   const simulationData = JSON.parse(values);

//   if (simulationData) {
//     // Gerar tabela principal com os dados da simulação
//     simulationData.data.brand_simulation.forEach((item) => {
//       const tr = document.createElement("tr");

//       // Criação dos elementos td para cada coluna
//       const td_img = document.createElement("td");
//       const img_bandeira = document.createElement("img");
//       img_bandeira.src = item.image;
//       img_bandeira.alt = item.brand;
//       td_img.appendChild(img_bandeira);

//       const td_tax_percent = document.createElement("td");
//       td_tax_percent.textContent = `${item.tax.toFixed(2)}%`;

//       const td_tax = document.createElement("td");
//       const taxAmount = item.tax_amount / 100;
//       td_tax.textContent = taxAmount.toLocaleString("pt-BR", {
//         style: "currency",
//         currency: "BRL",
//       });

//       const saleValue = parseFloat(simulationData.simulacao.valorVenda);
//       const td_sale_value = document.createElement("td");
//       td_sale_value.textContent = saleValue.toLocaleString("pt-BR", {
//         style: "currency",
//         currency: "BRL",
//       });

//       const totalValue = saleValue + taxAmount;
//       const td_total_value = document.createElement("td");
//       td_total_value.textContent = totalValue.toLocaleString("pt-BR", {
//         style: "currency",
//         currency: "BRL",
//       });

//       // Adicionar colunas à linha
//       tr.appendChild(td_img);
//       tr.appendChild(td_tax_percent);
//       tr.appendChild(td_tax);
//       tr.appendChild(td_sale_value);
//       tr.appendChild(td_total_value);

//       // Adicionar linha à tabela principal
//       document.getElementById("tabela").appendChild(tr);
//     });

//     // Gerar tabela de parcelas
//     const parcelas = simulationData.simulacao.parcelas;
//     const valorParcela = simulationData.simulacao.valorParcela;

//     const trParcelas = document.createElement("tr");
//     const tdParcelas = document.createElement("td");
//     tdParcelas.textContent = parcelas;

//     const tdValorParcela = document.createElement("td");
//     tdValorParcela.textContent = valorParcela.toLocaleString("pt-BR", {
//       style: "currency",
//       currency: "BRL",
//     });

//     trParcelas.appendChild(tdParcelas);
//     trParcelas.appendChild(tdValorParcela);

//     document.getElementById("tabela-parcelas-body").appendChild(trParcelas);
//   } else {
//     console.error("Nenhuma simulação encontrada no localStorage");
//   }

//   // Evento de clique para o botão "Voltar"
//   const btnVoltar = document.getElementById("btn-voltar");
//   if (btnVoltar) {
//     btnVoltar.addEventListener("click", function () {
//       // Redirecionar para a página inicial (home.html)
//       window.location.href = "home.html";
//     });
//   } else {
//     console.error("Botão 'Voltar' não encontrado.");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const values = localStorage.getItem("simulacao");
  const simulationData = JSON.parse(values);

  if (simulationData) {
    // Gerar tabela principal com os dados da simulação
    simulationData.data.brand_simulation.forEach((item) => {
      const tr = document.createElement("tr");

      // Criação dos elementos td para cada coluna
      const td_img = document.createElement("td");
      const img_bandeira = document.createElement("img");
      img_bandeira.src = item.image;
      img_bandeira.alt = item.brand;
      td_img.appendChild(img_bandeira);

      const td_tax_percent = document.createElement("td");
      td_tax_percent.textContent = `${item.tax.toFixed(2)}%`;

      const td_tax = document.createElement("td");
      const taxAmount = item.tax_amount / 100;
      td_tax.textContent = taxAmount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      const saleValue = parseFloat(simulationData.simulacao.valorVenda);
      const td_sale_value = document.createElement("td");
      td_sale_value.textContent = saleValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      const totalValue = saleValue + taxAmount;
      const td_total_value = document.createElement("td");
      td_total_value.textContent = totalValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      // Adicionar colunas à linha
      tr.appendChild(td_img);
      tr.appendChild(td_tax_percent);
      tr.appendChild(td_tax);
      tr.appendChild(td_sale_value);
      tr.appendChild(td_total_value);

      // Adicionar linha à tabela principal
      document.getElementById("tabela").appendChild(tr);
    });

    // Gerar tabela de parcelas
    const parcelas = simulationData.simulacao.parcelas;
    const valorParcela = simulationData.simulacao.valorParcela;
    const taxAmount = simulationData.data.brand_simulation[0].tax_amount / 100; // Obter a taxa de um dos itens (supondo que todos tenham a mesma taxa)

    const trParcelas = document.createElement("tr");
    const tdParcelas = document.createElement("td");
    tdParcelas.textContent = parcelas;

    const tdValorParcela = document.createElement("td");
    tdValorParcela.textContent = valorParcela.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const totalParcelaTaxa = valorParcela + taxAmount; // Calculando o valor parcelado + taxa

    const tdValorParcelaTaxa = document.createElement("td");
    tdValorParcelaTaxa.textContent = totalParcelaTaxa.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    trParcelas.appendChild(tdParcelas);
    trParcelas.appendChild(tdValorParcela);
    trParcelas.appendChild(tdValorParcelaTaxa); // Adicionando a coluna de valor parcelado + taxa

    document.getElementById("tabela-parcelas-body").appendChild(trParcelas);
  } else {
    console.error("Nenhuma simulação encontrada no localStorage");
  }

  // Evento de clique para o botão "Voltar"
  const btnVoltar = document.getElementById("btn-voltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", function () {
      // Redirecionar para a página inicial (home.html)
      window.location.href = "home.html";
    });
  } else {
    console.error("Botão 'Voltar' não encontrado.");
  }
});
