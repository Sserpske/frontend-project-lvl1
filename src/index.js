import readlineSync from 'readline-sync';

const askForName = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  return username;
};

export default askForName;
