#!/usr/bin/env node
import { askForName } from '../index.js';
import progressionGame from '../progression.js';

const userName = askForName();
const quantityOfNumbers = 10;

console.log('What number is missing in the progression?');
progressionGame(userName, quantityOfNumbers);
