import gameEngine from '../index.js';
import * as utils from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minimalNumber = 1;
const maximumNumber = 100;

const isPrime = (number) => {
  if (number < 2) {
    return true;
  }

  if (number === 2) {
    return false;
  }

  let i = 2;
  const maximumDivisor = Math.sqrt(number);

  while (i <= maximumDivisor) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const prepareCorrectResult = (number) => (isPrime(number) ? 'yes' : 'no');

const primeGame = () => {
  const question = utils.getRandomInt(minimalNumber, maximumNumber);
  const correctResult = prepareCorrectResult(question);

  return {
    question,
    correctResult,
  };
};

export default () => gameEngine(primeGame, description);
