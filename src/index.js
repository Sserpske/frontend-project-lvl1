import readlineSync from 'readline-sync';

const durationOfGame = 3;

export const askForName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const getRandomInt = (minimalNumber, maximumNumber) => Math.floor(
  Math.random() * (maximumNumber - minimalNumber + 1) + minimalNumber,
);

const answerComparator = (answer, correctResult) => answer === correctResult;

const askQuestion = (question) => readlineSync
  .question(`Question: ${question} \nYour answer: `);

const getQuestion = (roundData) => roundData.question;

const getCorrectResult = (roundData) => roundData.correctResult;

export const gameEngine = (game, description) => {
  const userName = askForName();
  let continueGame = true;
  let i = 0;

  console.log(description);

  do {
    const roundData = game();
    const answer = askQuestion(getQuestion(roundData));
    const correctResult = getCorrectResult(roundData);
    const isAnswerCorrect = answerComparator(answer, correctResult);

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
