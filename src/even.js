import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getArrayOfRandomInt = (lengthOfArray) => {
  const arr = [];

  for (let i = 0; i < lengthOfArray; i += 1) {
    arr.push(getRandomInt(100));
  }

  return arr;
};

const isOdd = (number) => number % 2;

const question = (number) => readlineSync.question(`Question: ${number} \nYour answer: `);

const answerHandler = (answer, number) => {
  const expectAnswer = !isOdd(number) ? 'yes' : 'no';

  return answer === expectAnswer;
};

const evenGame = (username, durationOfGame) => {
  const arrayOfRandomInt = getArrayOfRandomInt(durationOfGame);
  let continueGame = true;
  let i = 0;

  do {
    const currentInt = arrayOfRandomInt[i];
    const answer = question(currentInt);
    const isAnswerCorrect = answerHandler(answer, currentInt);

    if (isAnswerCorrect) {
      i += 1;
      console.log('Correct');

      if (i === durationOfGame) {
        continueGame = false;
        console.log(`Congratulations, ${username}!`);
      }
    } else {
      continueGame = false;
      const wrongAnswer = answer.toLowerCase() === 'yes' ? 'No' : 'Yes';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${wrongAnswer}'. \nLet's try again, ${username}!`);
    }
  } while (continueGame);
};

export default evenGame;
