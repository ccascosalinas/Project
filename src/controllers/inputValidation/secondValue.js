export function secondValidation(x) {
  if (operate && (parseFloat(x) >= "0" || x == ".")) {
    if (number2.includes(".") && x == ".") {
      number2 = number2;
    } else {
      number2 = number2 + x;
    }
    document.getElementById("ShowCalculate").innerText = number2;
  }
}
