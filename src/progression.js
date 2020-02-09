import readlineSync from 'readline-sync';
import * as methods from './index.js';

const question = (progression) => readlineSync
  .question(`Question: ${progression} \nYour answer: `);

const answerHandler = (answer, correctResult) => Number(answer) === correctResult;

const getProgressionArr = (quantityOfNumbers) => {
  const firstValue = methods.getRandomInt(10);
  const step = methods.getRandomInt(10);
  const progressionArray = [];
  let currentNumber = firstValue;

  for (let i = 0; i < quantityOfNumbers; i += 1) {
    progressionArray.push(currentNumber);
    currentNumber += step;
  }

  return progressionArray;
};

const getProgressionArrWoValue = (quantityOfNumbers) => {
  const progressionArr = getProgressionArr(quantityOfNumbers);
  const randomInt = methods.getRandomInt(quantityOfNumbers - 1);
  const correctAnswer = progressionArr[randomInt];

  progressionArr[randomInt] = '..';

  const progressionStrWoValue = progressionArr.join(' ');

  return {
    progressionStrWoValue,
    correctAnswer,
  };
};

const progressionGame = (userName, quantityOfNumbers, durationOfGame) => {
  let continueGame = true;
  let i = 0;

  do {
    const gameData = getProgressionArrWoValue(quantityOfNumbers);
    const progressionStr = gameData.progressionStrWoValue;
    const correctResult = gameData.correctAnswer;
    const answer = question(progressionStr);
    const isAnswerCorrect = answerHandler(answer, correctResult);

    if (isAnswerCorrect) {
      i += 1;
      console.log('Correct');

      if (i === durationOfGame) {
        continueGame = false;
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      continueGame = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'. \nLet's try again, ${userName}!`);
    }
  } while (continueGame);
};

export default progressionGame;
