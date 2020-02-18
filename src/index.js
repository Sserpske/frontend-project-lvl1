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

export const getRandomNumbers = (lengthOfArray) => {
  const arr = [];

  for (let i = 0; i < lengthOfArray; i += 1) {
    arr.push(getRandomInt(30));
  }

  return arr;
};

const answerHandler = (answer, correctResult) => answer === correctResult;

const askQuestion = (question) => readlineSync
  .question(`Question: ${question} \nYour answer: `);

export const gameEngine = (game, description, getQuestion, getCorrectResult) => {
  const userName = askForName();
  let continueGame = true;
  let i = 0;

  console.log(description);

  do {
    const roundData = game();
    const answer = askQuestion(getQuestion(roundData));
    const correctResult = getCorrectResult(roundData);
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
