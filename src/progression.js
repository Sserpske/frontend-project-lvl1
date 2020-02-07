import readlineSync from 'readline-sync';
import * as methods from './index.js';

const question = (progression) => readlineSync
  .question(`Question: ${progression} \nYour answer: `);

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

const progressionGame = (userName, quantityOfNumbers) => {
  const gameData = getProgressionArrWoValue(quantityOfNumbers);
  // Линтер требует декстракчеринг, но почему-то
  // progressionStr в таком случае undefined
  // const { progressionStr, correctAnswer } = gameData;
  const progressionStr = gameData.progressionStrWoValue;
  const correctAnswer = gameData.correctAnswer;
  const answer = question(progressionStr);

  if (correctAnswer === Number(answer)) {
    console.log(`Correct \nCongratulations, ${userName}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
  }
};

export default progressionGame;
