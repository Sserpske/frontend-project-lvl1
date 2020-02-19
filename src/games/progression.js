import * as helper from '../index.js';

const description = 'What number is missing in the progression?';
const minimalNumber = 1;
const maximumNumber = 10;

const getProgressionNumbers = (quantityOfNumbers) => {
  const firstValue = helper.getRandomInt(minimalNumber, maximumNumber);
  const step = helper.getRandomInt(minimalNumber, maximumNumber);
  const progressionNumbers = [];
  let currentNumber = firstValue;

  for (let i = 0; i < quantityOfNumbers; i += 1) {
    progressionNumbers.push(currentNumber);
    currentNumber += step;
  }

  return progressionNumbers;
};

const getProgressionNumbersWoValue = (quantityOfNumbers) => {
  const progressionNumbers = getProgressionNumbers(quantityOfNumbers);
  const randomInt = helper.getRandomInt(minimalNumber, maximumNumber - 1);
  const correctAnswer = progressionNumbers[randomInt];

  progressionNumbers[randomInt] = '..';

  const progressionStrWoValue = progressionNumbers.join(' ');

  return {
    progressionStrWoValue,
    correctAnswer,
  };
};

const progressionGame = () => {
  const quantityOfNumbers = 10;
  const gameData = getProgressionNumbersWoValue(quantityOfNumbers);
  const question = gameData.progressionStrWoValue;
  const correctResult = String(gameData.correctAnswer);

  return {
    question,
    correctResult,
  };
};

export default () => helper.gameEngine(progressionGame, description);
