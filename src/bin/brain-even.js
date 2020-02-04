#!/usr/bin/env node
import { askForName } from '../index.js';
import evenGame from '../even.js';

const userName = askForName();
const durationOfGame = 3;

console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenGame(userName, durationOfGame);
