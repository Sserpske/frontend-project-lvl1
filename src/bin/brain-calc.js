#!/usr/bin/env node
import { askForName } from '../index.js';
import calcGame from '../games/calc.js';

const userName = askForName();
const durationOfGame = 3;

console.log('What is the result of the expression?');
calcGame(userName, durationOfGame);
