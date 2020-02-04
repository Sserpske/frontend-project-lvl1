import readlineSync from 'readline-sync';

export const askForName = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  return username;
};

export const getRandomInt = (maximumNumber) => Math.floor(
  Math.random() * Math.floor(maximumNumber),
);

export const getArrayOfRandomInt = (lengthOfArray) => {
  const arr = [];

  for (let i = 0; i < lengthOfArray; i += 1) {
    arr.push(getRandomInt(100));
  }

  return arr;
};
