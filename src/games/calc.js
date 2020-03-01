import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';
const minimalNumber = 1;
const maximumNumber = 50;

const getRandomOperation = () => {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[getRandomInt(0, operators.length - 1)];

  switch (currentOperator) {
    case '+': {
      return {
        symbolOfOperation: '+',
        calculation: (a, b) => a + b,
      };
    }
    case '-': {
      return {
        symbolOfOperation: '-',
        calculation: (a, b) => a - b,
      };
    }
    case '*': {
      return {
        symbolOfOperation: '*',
        calculation: (a, b) => a * b,
      };
    }
    default: {
      return null;
    }
  }
};

const playRound = () => {
  const randomInt1 = getRandomInt(minimalNumber, maximumNumber);
  const randomInt2 = getRandomInt(minimalNumber, maximumNumber);
  const operationData = getRandomOperation();
  const operator = operationData.symbolOfOperation;
  const question = `${randomInt1} ${operator} ${randomInt2}`;
  const correctAnswer = String(operationData.calculation(randomInt1, randomInt2));

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(playRound, description);
