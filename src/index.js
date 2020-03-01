import readlineSync from 'readline-sync';

const durationOfGame = 3;

const answerComparator = (answer, correctAnswer) => answer === correctAnswer;

const askQuestion = (question) => readlineSync
  .question(`Question: ${question} \nYour answer: `);

const getQuestion = (roundData) => roundData.question;

const getCorrectAnswer = (roundData) => roundData.correctAnswer;

const gameEngine = (game, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 1; i <= durationOfGame; i += 1) {
    const roundData = game();
    const answer = askQuestion(getQuestion(roundData));
    const correctAnswer = getCorrectAnswer(roundData);
    const isAnswerCorrect = answerComparator(answer, correctAnswer);

    if (isAnswerCorrect) {
      console.log('Correct');

      if (i === durationOfGame) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default gameEngine;
