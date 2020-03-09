import readlineSync from 'readline-sync';

const durationOfGame = 3;

const gameEngine = (game, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 1; i <= durationOfGame; i += 1) {
    const roundData = game();
    console.log(`Question: ${roundData.question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === roundData.correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${roundData.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
