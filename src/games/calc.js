import readlineSync from 'readline-sync';
import * as methods from '../index.js';

const question = (number1, number2, operation) => readlineSync
  .question(`Question: ${number1} ${operation} ${number2} \nYour answer: `);

const answerHandler = (answer, correctResult) => Number(answer) === correctResult;

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;

    default:
      return 0;
  }
};

const calcGame = (username, durationOfGame) => {
  const arrayOfRandomInt1 = methods.getArrayOfRandomInt(durationOfGame);
  const arrayOfRandomInt2 = methods.getArrayOfRandomInt(durationOfGame);
  const arrayOfOperations = ['+', '-', '*'];
  let continueGame = true;
  let i = 0;

  do {
    const currentInt1 = arrayOfRandomInt1[i];
    const currentInt2 = arrayOfRandomInt2[i];
    const currentOperation = arrayOfOperations[methods.getRandomInt(3)];
    const answer = question(currentInt1, currentInt2, currentOperation);
    const correctResult = calculate(currentInt1, currentInt2, currentOperation);
    const isAnswerCorrect = answerHandler(answer, correctResult);

    if (isAnswerCorrect) {
      i += 1;
      console.log('Correct');

      if (i === durationOfGame) {
        continueGame = false;
        console.log(`Congratulations, ${username}!`);
      }
    } else {
      continueGame = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'. \nLet's try again, ${username}!`);
    }
  } while (continueGame);
};

export default calcGame;
