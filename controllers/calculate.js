var calculate = function () {
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