#!/usr/bin/env node
import askForName from '../index.js';
import evenGame from '../even.js';

const userName = askForName();

evenGame(userName);
