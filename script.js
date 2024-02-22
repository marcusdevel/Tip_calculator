// // Seleciona o elemento input
// var peopleInput = document.getElementById('people');
// // Seleciona o elemento da mensagem de erro
// var errorMessage = document.getElementById('error-message');

// // Adiciona um ouvinte de evento de saída de foco (blur) ao input
// peopleInput.addEventListener('blur', function() {
//     // Verifica se o valor digitado é 0
//     if (parseInt(peopleInput.value) === 0) {
//         // Se for, adiciona a classe para a borda vermelha
//         peopleInput.classList.add('error-border');
//         // Exibe a mensagem de erro
//         errorMessage.style.display = 'block';
//     } else {
//         // Caso contrário, remove a classe para a borda vermelha
//         peopleInput.classList.remove('error-border');
//         // Esconde a mensagem de erro
//         errorMessage.style.display = 'none';
//     }
// });

// const typeMoneyInput = document.getElementById("type-money");
// const tipAmountSpan = document.querySelector(".tip span");

// // Adiciona um ouvinte de evento para o evento 'input' que ocorre quando o valor do input é alterado
// typeMoneyInput.addEventListener("input", function () {
//   // Obtém o valor digitado no input
//   const typedValue = parseFloat(typeMoneyInput.value);

//   // Verifica se o valor digitado é um número válido
//   if (!isNaN(typedValue)) {
//     // Atualiza o conteúdo da span com o valor digitado formatado como moeda
//     tipAmountSpan.textContent = `$${typedValue.toFixed(2)}`;
//   } else {
//     // Se o valor digitado não for um número válido, exibe $0.00
//     tipAmountSpan.textContent = "$0.00";
//   }
// });

// Capturando os elementos relevantes
const typeMoneyInput = document.getElementById("type-money");
const buttons = document.querySelectorAll(".buttons button");
const peopleInput = document.getElementById("people");
const tipAmountSpan = document.querySelector(".tip span");
// const payPerson = document.querySelector(".total span")

// Adicionando ouvintes de evento aos botões de desconto
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Capturando o valor do desconto escolhido
    const tipPercentage = parseFloat(button.textContent) / 100;

    // Capturando o valor digitado
    const typedValue = parseFloat(typeMoneyInput.value);

    // Capturando o número de pessoas
    const numberOfPeople = parseInt(peopleInput.value);

    // Verificando se o valor digitado é válido e se o número de pessoas é válido
    if (!isNaN(typedValue) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      // Calculando o valor total do desconto
      const totalTip = typedValue * tipPercentage;

      // Calculando o valor final por pessoa
      const finalAmountPerPerson = totalTip / numberOfPeople;

      // Atualizando o conteúdo da primeira span com o valor final formatado como moeda
      tipAmountSpan.textContent = `$${finalAmountPerPerson.toFixed(2)}`;
      // const paymentPerson = (typedValue/numberOfPeople) + peopleInput.value
      // payPerson.textContent = `$${paymentPerson.toFixed(2)}`;
    } else {
      // Se algum valor não for válido, exibe $0.00 na span
      tipAmountSpan.textContent = "$0.00";
    }
  });
});
