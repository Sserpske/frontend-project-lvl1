#!/usr/bin/env node
import { askForName } from '../index.js';
import evenGame from '../games/even.js';

const userName = askForName();
const durationOfGame = 3;

evenGame(userName, durationOfGame);
