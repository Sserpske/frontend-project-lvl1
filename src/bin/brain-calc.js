#!/usr/bin/env node
import { askForName } from '../index.js';
import calcGame from '../games/calc.js';

const userName = askForName();
const durationOfGame = 3;

calcGame(userName, durationOfGame);
