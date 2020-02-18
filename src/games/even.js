import readlineSync from 'readline-sync';
import * as helper from '../index.js';

const isOdd = (number) => number % 2;

const question = (number) => readlineSync.question(`Question: ${number} \nYour answer: `);

const answerHandler = (answer, number) => {
  const expectAnswer = !isOdd(number) ? 'yes' : 'no';

  return answer === expectAnswer;
};

const evenGame = (userName, durationOfGame) => {
  const randomNumbers = helper.getRandomNumbers(durationOfGame);
  let continueGame = true;
  let i = 0;

  do {
    const currentInt = randomNumbers[i];
    const answer = question(currentInt);
    const isAnswerCorrect = answerHandler(answer, currentInt);

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

export default evenGame;
