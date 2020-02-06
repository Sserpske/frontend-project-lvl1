#!/usr/bin/env node
import { askForName } from '../index.js';
import gcdGame from '../gcd.js';

const userName = askForName();
const durationOfGame = 3;

console.log('Find the greatest common divisor of given numbers.');
gcdGame(userName, durationOfGame);
