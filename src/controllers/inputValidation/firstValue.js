export function firstvalidation(x) {
  if ((parseFloat(x) >= "0" || x == ".") && !operate) {
    if (number1.includes(".") && x == ".") {
      number1 = number1;
    } else {
      number1 = number1 + x;
    }
    document.getElementById("ShowCalculate").innerText = number1;
  }
}
