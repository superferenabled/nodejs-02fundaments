// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// console.log(emailTemplate);
import { getUserById, type User } from "./js-foundation/04-arrows";
import {buildMakePerson} from './js-foundation/05-factory';
import {uuidv4, getAge} from './plugins/index';
const id = 1;

import { buildLogger } from "./plugins/index";

import { getPokemonById } from "./js-foundation/06-promises";

getPokemonById(25).then((pokemon) => console.log({ pokemon }));

const logger = buildLogger('app.js');
logger.log('yo yo!');
logger.error('falio ferga!');

getUserById(id, (error: Error, user: User) => {
  if(error) {
    throw error;
  }
  console.log({user})
});

const obj = {name: 'Fer Castillo', birthdate: '1988-10-22'};
const makePerson = buildMakePerson({uuidv4, getAge});

const person = makePerson(obj)

console.log(person);
