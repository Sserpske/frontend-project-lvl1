import * as helper from '../index.js';

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

const answerHandler = (number) => (isPrime(number) ? 'yes' : 'no');

const primeGame = () => {
  const randomInt = helper.getRandomInt(minimalNumber, maximumNumber);
  const question = randomInt;
  const correctResult = answerHandler(randomInt);

  return {
    question,
    correctResult,
  };
};

export default () => helper.gameEngine(primeGame, description);
