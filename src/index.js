import readlineSync from 'readline-sync';

const durationOfGame = 3;

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
    const isAnswerCorrect = () => answer === correctAnswer;

    if (isAnswerCorrect(answer, correctAnswer)) {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
