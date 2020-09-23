import { firstvalidation } from "./inputValidation/firstValue";
import { operatorValidation } from "./inputValidation/operatorValue";
import { secondValidation } from "./inputValidation/secondValue";


export let init = () => {
  let elements = document.getElementsByClassName("numbers-btn")
  Array.from(elements).forEach(element=> {
    element.addEventListener("click", (element) =>{
      document.getElementById('ShowCalculate').innerText = element.target.value
    })
  })
}

let elements = document.getElementsByClassName("operators-btn")
Array.from(elements).forEach(element=> {
  element.addEventListener("click", (element) =>{
    document.getElementById('ShowCalculate').innerText = element.target.value
  
  })
})


/*console.log(element.target.value)*/
/* export var init = function (event) {
  var x = event.target.value;
  var monitor = document.getElementById("ShowCalculate").innerText;

  firstvalidation(x);
  secondValidation(x);
  operatorValidation(x);
};
*/