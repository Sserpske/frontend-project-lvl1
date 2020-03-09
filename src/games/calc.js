import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';
const minimalNumber = 1;
const maximumNumber = 50;
const operators = ['+', '-', '*'];

const calculate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const generateRoundData = () => {
  const randomInt1 = getRandomInt(minimalNumber, maximumNumber);
  const randomInt2 = getRandomInt(minimalNumber, maximumNumber);
  const currentOperator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${randomInt1} ${currentOperator} ${randomInt2}`;
  const correctAnswer = String(calculate(currentOperator, randomInt1, randomInt2));

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(generateRoundData, description);
