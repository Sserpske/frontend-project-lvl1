#!/usr/bin/env node
import { askForName } from '../index.js';
import primeGame from '../games/prime.js';

const userName = askForName();
const durationOfGame = 3;

primeGame(userName, durationOfGame);
