const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
}
rl.question("Enter the first number: ", (input1) => {
  rl.question("Enter the second number: ", (input2) => {
    rl.question("Enter the operation (+, -, *, /): ", (operation) => {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);
      let result;
      switch (operation) {
        case '+':
          result = add(num1, num2);
          break;
        case '-':
          result = subtract(num1, num2);
          break;
        case '*':
          result = multiply(num1, num2);
          break;
        case '/':
          result = divide(num1, num2);
          break;
        default:
          result = "Invalid operation";
      }
      console.log("Result: " + result);
      rl.close();
    });
  });
});
