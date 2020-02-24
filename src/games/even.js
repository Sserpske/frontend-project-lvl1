import * as helper from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minimalNumber = 1;
const maximumNumber = 100;
const isOdd = (number) => number % 2;

const prepareCorrectResult = (number) => (isOdd(number) ? 'no' : 'yes');

const evenGame = () => {
  const question = helper.getRandomInt(minimalNumber, maximumNumber);
  const correctResult = prepareCorrectResult(question);

  return {
    question,
    correctResult,
  };
};

export default () => helper.gameEngine(evenGame, description);
