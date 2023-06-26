// Dados simulados das doenças e suas prevenções
const data = [
    {
      doenca: "Diabetes",
      prevencao: "Adote uma dieta balanceada, pratique atividade física regularmente, mantenha um peso saudável e controle a pressão arterial e os níveis de colesterol."
    },
    {
      doenca: "Hipertensão",
      prevencao: "Reduza o consumo de sal, mantenha uma alimentação saudável, pratique exercícios regularmente, limite o consumo de álcool e evite o tabagismo."
    },
    {
      doenca: "Obesidade",
      prevencao: "Tenha uma alimentação equilibrada, pratique atividades físicas regularmente, controle as porções de alimentos, evite alimentos ultraprocessados e beba bastante água."
    }
  ];
  
  // Função para pesquisar a doença
  function searchDisease() {
    const searchInput = document.getElementById("searchInput");
    const resultContainer = document.getElementById("resultContainer");
    const resultTitle = document.getElementById("resultTitle");
    const resultText = document.getElementById("resultText");
  
    const searchTerm = searchInput.value.toLowerCase();
    const foundDisease = data.find(item => item.doenca.toLowerCase() === searchTerm);
  
    if (foundDisease) {
      resultTitle.textContent = foundDisease.doenca;
      resultText.textContent = foundDisease.prevencao;
      resultContainer.style.display = "block";
    } else {
      resultContainer.style.display = "none";
      alert("Doença não encontrada. Por favor, tente novamente.");
    }
  }
  
  // Evento de clique no botão de pesquisa
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", searchDisease);
  