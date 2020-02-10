import readlineSync from 'readline-sync';
import * as methods from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return true;
  }

  if (number === 2) {
    return false;
  }

  let i = 2;
  const maximumDivisor = Math.sqrt(number);

  while (i <= maximumDivisor) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const answerHandler = (answer, number) => {
  const expectAnswer = isPrime(number) ? 'yes' : 'no';

  return answer === expectAnswer;
};

const question = (number) => readlineSync.question(`Question: ${number} \nYour answer: `);

const primeGame = (userName, durationOfGame) => {
  let continueGame = true;
  let i = 0;

  do {
    const randomInt = methods.getRandomInt(100);
    const answer = question(randomInt);
    const isAnswerCorrect = answerHandler(answer, randomInt);

    if (isAnswerCorrect) {
      i += 1;
      console.log('Correct');

      if (i === durationOfGame) {
        continueGame = false;
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      continueGame = false;
      const wrongAnswer = answer.toLowerCase() === 'yes' ? 'No' : 'Yes';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${wrongAnswer}'. \nLet's try again, ${userName}!`);
    }
  } while (continueGame);
};

export default primeGame;
