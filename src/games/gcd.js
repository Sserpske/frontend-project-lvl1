import * as helper from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minimalNumber = 1;
const maximumNumber = 50;

const getGcd = (number1, number2) => {
  if (number1 === number2) {
    return number1;
  }

  const smallerNumber = number1 < number2 ? number1 : number2;
  const largerNumber = smallerNumber === number1 ? number2 : number1;

  for (let i = smallerNumber; i >= 1; i -= 1) {
    if (largerNumber % i === 0 && smallerNumber % i === 0) {
      return i;
    }
  }

  return 1;
};

const gcdGame = () => {
  const currentInt1 = helper.getRandomInt(minimalNumber, maximumNumber);
  const currentInt2 = helper.getRandomInt(minimalNumber, maximumNumber);
  const question = `${currentInt1} ${currentInt2}`;
  const correctResult = String(getGcd(currentInt1, currentInt2));

  return {
    question,
    correctResult,
  };
};

export default () => helper.gameEngine(gcdGame, description);
