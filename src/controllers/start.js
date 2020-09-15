import { firstvalidation } from "./inputValidation/firstValue";
import { operatorValidation } from "./inputValidation/operatorValue";
import { secondValidation } from "./inputValidation/secondValue";

export var init = function (event) {
  var x = event.target.value;
  var monitor = document.getElementById("ShowCalculate").innerText;

  firstvalidation(x);
  secondValidation(x);
  operatorValidation(x);
};
