import readlineSync from 'readline-sync';


export const askForName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};