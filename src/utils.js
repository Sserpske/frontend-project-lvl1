const getRandomInt = (minimalNumber, maximumNumber) => Math.floor(
  Math.random() * (maximumNumber - minimalNumber + 1) + minimalNumber,
);

export default getRandomInt;
