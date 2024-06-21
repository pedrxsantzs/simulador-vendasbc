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
    const taxAmount = simulationData.data.brand_simulation[0].tax_amount / 100;

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
    trParcelas.appendChild(tdValorParcelaTaxa);

    document.getElementById("tabela__parcelasBody").appendChild(trParcelas);
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
