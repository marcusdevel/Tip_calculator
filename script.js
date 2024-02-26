const typeMoneyInput = document.getElementById("type-money");
const buttons = document.querySelectorAll(".buttons button");
const peopleInput = document.getElementById("people");
const tipAmountSpan = document.querySelector(".tip span");
const totalamountSpan = document.querySelector(".total span");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const tipPercentage = parseFloat(button.textContent) / 100;
    const typedValue = parseFloat(typeMoneyInput.value);
    const numberOfPeople = parseInt(peopleInput.value);

    if (!isNaN(typedValue) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      const totalTip = typedValue * tipPercentage;
      const finalAmountPerPerson = totalTip / numberOfPeople;
      tipAmountSpan.textContent = `$${finalAmountPerPerson.toFixed(2)}`;

      const totalAmount = (typedValue / numberOfPeople) + finalAmountPerPerson;
      totalamountSpan.textContent = `$${totalAmount.toFixed(2)}`;
    } else {
      tipAmountSpan.textContent = "$0.00";
    }
  });
});



const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function() {
    typeMoneyInput.value = "";
    
    peopleInput.value = "";

    tipAmountSpan.textContent = "$0.00";

    totalamountSpan.textContent = "$0.00";
});

