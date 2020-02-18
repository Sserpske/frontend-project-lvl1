#!/usr/bin/env node
import { askForName } from '../index.js';
import gcdGame from '../games/gcd.js';

const userName = askForName();
const durationOfGame = 3;

gcdGame(userName, durationOfGame);
