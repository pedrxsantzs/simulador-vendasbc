// Adiciona um event listener para o evento 'DOMContentLoaded' que será executado quando o conteúdo do DOM for completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Obtém os dados da simulação armazenados no localStorage
  const values = localStorage.getItem("simulacao");
  const simulationData = JSON.parse(values); // Converte os dados JSON em um objeto JavaScript

  if (simulationData) {
    // Itera sobre cada item de simulação de marca
    simulationData.data.brand_simulation.forEach((item) => {
      // Cria uma nova linha de tabela
      const tr = document.createElement("tr");

      // Cria uma célula de tabela para a imagem da bandeira
      const td_img = document.createElement("td");
      const img_bandeira = document.createElement("img");
      img_bandeira.src = item.image; // Define a fonte da imagem
      img_bandeira.alt = item.brand; // Define o texto alternativo da imagem
      td_img.appendChild(img_bandeira); // Adiciona a imagem à célula

      // Cria uma célula de tabela para a porcentagem da taxa
      const td_tax_percent = document.createElement("td");
      td_tax_percent.textContent = `${item.tax.toFixed(2)}%`; // Define o texto da célula com a taxa formatada

      // Cria uma célula de tabela para o valor da taxa
      const td_tax = document.createElement("td");
      const taxAmount = item.tax_amount / 100; // Converte o valor da taxa
      td_tax.textContent = taxAmount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }); // Define o texto da célula com o valor da taxa formatado como moeda

      // Cria uma célula de tabela para o valor da venda
      const saleValue = parseFloat(simulationData.simulacao.valorVenda);
      const td_sale_value = document.createElement("td");
      td_sale_value.textContent = saleValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }); // Define o texto da célula com o valor da venda formatado como moeda

      // Cria uma célula de tabela para o valor total (venda + taxa)
      const totalValue = saleValue + taxAmount;
      const td_total_value = document.createElement("td");
      td_total_value.textContent = totalValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }); // Define o texto da célula com o valor total formatado como moeda

      // Adiciona as células à linha da tabela
      tr.appendChild(td_img);
      tr.appendChild(td_tax_percent);
      tr.appendChild(td_tax);
      tr.appendChild(td_sale_value);
      tr.appendChild(td_total_value);

      // Adiciona a linha da tabela ao corpo da tabela no documento
      document.getElementById("tabela").appendChild(tr);
    });

    // Obtém o número de parcelas e o valor da parcela da simulação
    const parcelas = simulationData.simulacao.parcelas;
    const valorParcela = simulationData.simulacao.valorParcela;
    const taxAmount = simulationData.data.brand_simulation[0].tax_amount / 100;

    // Cria uma nova linha de tabela para as parcelas
    const trParcelas = document.createElement("tr");

    // Cria uma célula de tabela para o número de parcelas
    const tdParcelas = document.createElement("td");
    tdParcelas.textContent = parcelas;

    // Cria uma célula de tabela para o valor da parcela
    const tdValorParcela = document.createElement("td");
    tdValorParcela.textContent = valorParcela.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }); // Define o texto da célula com o valor da parcela formatado como moeda

    // Calcula o valor total da parcela com a taxa
    const totalParcelaTaxa = valorParcela + taxAmount;

    // Cria uma célula de tabela para o valor total da parcela com a taxa
    const tdValorParcelaTaxa = document.createElement("td");
    tdValorParcelaTaxa.textContent = totalParcelaTaxa.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }); // Define o texto da célula com o valor total da parcela formatado como moeda

    // Adiciona as células à linha da tabela
    trParcelas.appendChild(tdParcelas);
    trParcelas.appendChild(tdValorParcela);
    trParcelas.appendChild(tdValorParcelaTaxa);

    // Adiciona a linha da tabela ao corpo da tabela de parcelas no documento
    document.getElementById("tabela__parcelasBody").appendChild(trParcelas);
  } else {
    // Exibe um erro no console se nenhuma simulação for encontrada no localStorage
    console.error("Nenhuma simulação encontrada no localStorage");
  }

  // Seleciona o botão 'Voltar' e adiciona um event listener para redirecionar à página inicial
  const btnVoltar = document.getElementById("btn-voltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", function () {
      window.location.href = "home.html"; // Redireciona para a página inicial
    });
  } else {
    // Exibe um erro no console se o botão 'Voltar' não for encontrado
    console.error("Botão 'Voltar' não encontrado.");
  }
});
