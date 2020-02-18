import readlineSync from 'readline-sync';

export const askForName = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  return username;
};

export const getRandomInt = (maximumNumber) => {
  const randomInt = Math.floor(Math.random() * maximumNumber);

  if (randomInt === 0) {
    return getRandomInt(maximumNumber);
  }

  return randomInt;
};

export const getRandomNumbers = (lengthOfArray) => {
  const arr = [];

  for (let i = 0; i < lengthOfArray; i += 1) {
    arr.push(getRandomInt(30));
  }

  return arr;
};
