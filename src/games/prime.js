import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

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

const getAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const generateRoundData = () => {
  const question = getRandomInt(minimalNumber, maximumNumber);
  const correctAnswer = getAnswer(question);

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(generateRoundData, description);
