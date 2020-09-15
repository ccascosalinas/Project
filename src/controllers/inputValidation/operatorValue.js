export function operatorValidation(x) {
  if (!parseFloat(x) && x != "0" && !number2 && x != ".") {
    operate = x;
    document.getElementById("ShowCalculate").innerText = number1 + operate;
  }
}
