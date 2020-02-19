import * as helper from '../index.js';

const description = 'What is the result of the expression?';
const minimalNumber = 1;
const maximumNumber = 50;

const getRandomOperation = () => {
  switch (helper.getRandomInt(0, 2)) {
    case 0: {
      return {
        symbolOfOperation: '+',
        calculation: (a, b) => a + b,
      };
    }
    case 1: {
      return {
        symbolOfOperation: '-',
        calculation: (a, b) => a - b,
      };
    }
    case 2: {
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

const calcGame = () => {
  const randomInt1 = helper.getRandomInt(minimalNumber, maximumNumber);
  const randomInt2 = helper.getRandomInt(minimalNumber, maximumNumber);
  const operationData = getRandomOperation();
  const operator = operationData.symbolOfOperation;
  const question = `${randomInt1} ${operator} ${randomInt2}`;
  const correctResult = String(operationData.calculation(randomInt1, randomInt2));

  return {
    question,
    correctResult,
  };
};

export default () => helper.gameEngine(calcGame, description);
