export var show = function () {
    if (number1 && number2 && operate) {
      document.getElementById("ShowCalculate").innerText = calculate();
      if (calculate() && operate == "/" && number2 == "0") {
        alert("Error");
      }
    }
    if (calculate()) {
      number1 = calculate();
      number2 = "";
      operate = "";
    }
  };