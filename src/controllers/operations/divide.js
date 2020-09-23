function divide(number1, number2) {
  if (number2 == 0) {
    return "∞";
  }
  return (parseFloat(number1) / parseFloat(number2)).toFixed(2);
}

module.exports = divide;
