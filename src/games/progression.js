import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';
const minimalNumber = 1;
const maximumNumber = 10;
const progressionLength = 10;

const getProgression = (length, firstValue, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstValue + step * i);
  }

  return progression;
};

const getQuestion = (progression, hiddenValueIndex) => {
  const progressionWithoutValue = progression;
  progressionWithoutValue[hiddenValueIndex] = '..';

  return progressionWithoutValue.join(' ');
};

const generateRoundData = () => {
  const firstValue = getRandomInt(minimalNumber, maximumNumber);
  const step = getRandomInt(minimalNumber, maximumNumber);
  const progression = getProgression(progressionLength, firstValue, step);
  const hiddenValueIndex = getRandomInt(minimalNumber, progressionLength - 1);
  const correctAnswer = String(progression[hiddenValueIndex]);
  const question = getQuestion(progression, hiddenValueIndex);

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(generateRoundData, description);
