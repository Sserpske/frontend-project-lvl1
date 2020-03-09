import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minimalNumber = 1;
const maximumNumber = 100;
const isEven = (number) => number % 2 === 0;

const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const generateRoundData = () => {
  const question = getRandomInt(minimalNumber, maximumNumber);
  const correctAnswer = getAnswer(question);

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(generateRoundData, description);
