import * as helper from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minimalNumber = 1;
const maximumNumber = 100;
const isOdd = (number) => number % 2;

const answerHandler = (number) => (isOdd(number) ? 'no' : 'yes');

const evenGame = () => {
  const currentInt = helper.getRandomInt(minimalNumber, maximumNumber);
  const correctResult = answerHandler(currentInt);

  return {
    currentInt,
    correctResult,
  };
};

const getQuestion = (roundData) => roundData.currentInt;
const getCorrectResult = (roundData) => roundData.correctResult;

export default () => helper.gameEngine(evenGame, description, getQuestion, getCorrectResult);
