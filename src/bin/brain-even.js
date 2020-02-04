#!/usr/bin/env node
import askForName from '../index.js';
import evenGame from '../even.js';

const userName = askForName();
const durationOfGame = 3;

evenGame(userName, durationOfGame);
