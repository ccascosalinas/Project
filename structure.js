var insert = function (event) {
  var x = event.target.value;
  var monitor = document.getElementById("ShowCalculate").innerText;

  firstvalidation(x);
  secondValidation(x);
  operatorValidation(x);
};
