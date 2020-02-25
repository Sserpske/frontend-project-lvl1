import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minimalNumber = 1;
const maximumNumber = 100;
const isEven = (number) => number % 2 === 0;

const prepareCorrectResult = (number) => (isEven(number) ? 'yes' : 'no');

const evenGame = () => {
  const question = getRandomInt(minimalNumber, maximumNumber);
  const correctResult = prepareCorrectResult(question);

  return {
    question,
    correctResult,
  };
};

export default () => gameEngine(evenGame, description);
