import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minimalNumber = 1;
const maximumNumber = 100;
const isOdd = (number) => number % 2;

const prepareCorrectResult = (number) => (isOdd(number) ? 'no' : 'yes');

const evenGame = () => {
  const question = getRandomInt(minimalNumber, maximumNumber);
  const correctResult = prepareCorrectResult(question);

  return {
    question,
    correctResult,
  };
};

export default () => gameEngine(evenGame, description);
