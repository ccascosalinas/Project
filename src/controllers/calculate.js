import {add} from "./operations/add"
import {divide} from "./operations/divide"
import {multiply} from "./operations/multiply"
import {subtract} from "./operations/subtract"

export var calculate = function () {
    switch (operate) {
      case "+":
        return add();
  
      case "-":
        return subtract();
  
      case "x":
        return multiply();
  
      case "/":
        return divide();
    }
  };