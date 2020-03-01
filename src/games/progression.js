import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';
const minimalNumber = 1;
const maximumNumber = 10;
const progressionLength = 10;

const getProgressionNumbers = (length, firstValue, step) => {
  const progressionNumbers = [];
  let currentNumber = firstValue;

  for (let i = 0; i < length; i += 1) {
    progressionNumbers.push(currentNumber);
    currentNumber += step;
  }

  return progressionNumbers;
};

const getProgressionNumbersWoValue = (quantityOfNumbers) => {
  const firstValue = getRandomInt(minimalNumber, maximumNumber);
  const step = getRandomInt(minimalNumber, maximumNumber);
  const progressionNumbers = getProgressionNumbers(quantityOfNumbers, firstValue, step);
  const randomInt = getRandomInt(minimalNumber, maximumNumber - 1);
  const correctAnswer = progressionNumbers[randomInt];

  progressionNumbers[randomInt] = '..';

  const progressionStrWoValue = progressionNumbers.join(' ');

  return {
    progressionStrWoValue,
    correctAnswer,
  };
};

const playRound = () => {
  const gameData = getProgressionNumbersWoValue(progressionLength);
  const question = gameData.progressionStrWoValue;
  const correctAnswer = String(gameData.correctAnswer);

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(playRound, description);
