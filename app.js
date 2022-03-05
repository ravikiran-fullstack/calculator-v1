let acc = 0;

const inputDiv = document.getElementById("input");
const resultDiv = document.getElementById("result");

let totalExpression = "";

const input = (input) => {
  console.log(input);
  totalExpression += input;
  console.log(totalExpression);
  inputDiv.innerHTML = totalExpression;
};

const calculateOutput = () => {
  console.log(eval(totalExpression));
  const result = eval(totalExpression);
  resultDiv.innerHTML = result;
};

const clearOutput = () => {
  console.log("clear");
  totalExpression = "";
  resultDiv.innerHTML = "";
  inputDiv.innerHTML = "";
};
