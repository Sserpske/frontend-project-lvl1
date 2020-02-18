#!/usr/bin/env node
import { askForName } from '../index.js';
import progressionGame from '../games/progression.js';

const userName = askForName();
const quantityOfNumbers = 10;
const durationOfGame = 3;

progressionGame(userName, durationOfGame, quantityOfNumbers);
