#!/usr/bin/env node
import { askForName } from '../index.js';
import primeGame from '../prime.js';

const userName = askForName();
const durationOfGame = 3;

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
primeGame(userName, durationOfGame);
