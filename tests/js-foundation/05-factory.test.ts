import { describe, expect, test } from 'vitest';
import { buildMakePerson } from '../../src/js-foundation/05-factory';
import { uuidv4, getAge } from '../../src/plugins';

describe('05-factory', () => {
  test('buildmakeperson should return a function', () => {
    const makePerson = buildMakePerson({ uuidv4, getAge });
    expect(typeof makePerson).toBe('function');
  });
  test('buildmakeperson should return a function', () => {
    const uuidv4 = () => '1234';
    const getAge = () => 38;

    const makePerson = buildMakePerson({ uuidv4, getAge });
    const johnDoe = makePerson({ name: 'john doe', birthdate: '1988-10-22' });
    expect(johnDoe).toEqual({
      id: '1234',
      name: 'john doe',
      birthdate: '1988-10-22',
      age: 38,
    });
  });
});
