import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';
const minimalNumber = 1;
const maximumNumber = 10;
const progressionLength = 10;

const getProgression = (length) => {
  const progression = [];
  const firstValue = getRandomInt(minimalNumber, maximumNumber);
  const step = getRandomInt(minimalNumber, maximumNumber);

  for (let i = 0; i < length; i += 1) {
    progression.push(firstValue + step * i);
  }

  return progression;
};

const getProgressionWithoutValue = (quantityOfNumbers) => {
  const progression = getProgression(quantityOfNumbers);
  const randomInt = getRandomInt(minimalNumber, maximumNumber - 1);
  const correctAnswer = progression[randomInt];

  progression[randomInt] = '..';

  const progressionStrWoValue = progression.join(' ');

  return {
    progressionStrWoValue,
    correctAnswer,
  };
};

const playRound = () => {
  const gameData = getProgressionWithoutValue(progressionLength);
  const question = gameData.progressionStrWoValue;
  const correctAnswer = String(gameData.correctAnswer);

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(playRound, description);
