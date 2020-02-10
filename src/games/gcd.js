import readlineSync from 'readline-sync';
import * as methods from '../index.js';

const question = (number1, number2) => readlineSync
  .question(`Question: ${number1} ${number2} \nYour answer: `);

const answerHandler = (answer, correctResult) => Number(answer) === correctResult;

const getGcd = (number1, number2) => {
  if (number1 === number2) {
    return number1;
  }

  const smallerNumber = number1 < number2 ? number1 : number2;
  const largerNumber = smallerNumber === number1 ? number2 : number1;

  for (let i = smallerNumber; i >= 1; i -= 1) {
    if (largerNumber % i === 0 && smallerNumber % i === 0) {
      return i;
    }
  }

  // Линтер ругается, что функция ничего не возвращает
  // в конце, пока не понял как решить иначе
  return false;
};

const gcdGame = (userName, durationOfGame) => {
  const arrayOfRandomInt1 = methods.getArrayOfRandomInt(durationOfGame);
  const arrayOfRandomInt2 = methods.getArrayOfRandomInt(durationOfGame);
  let continueGame = true;
  let i = 0;

  do {
    const currentInt1 = arrayOfRandomInt1[i];
    const currentInt2 = arrayOfRandomInt2[i];
    const answer = question(currentInt1, currentInt2);
    const correctResult = getGcd(currentInt1, currentInt2);
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

export default gcdGame;
