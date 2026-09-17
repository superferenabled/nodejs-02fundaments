import { describe, expect, test } from 'vitest';
import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('06-promises', () => {
  test('getpokemonbyid should return a pokemon', async () => {
    const pokeId = 1;
    const pokeName = await getPokemonById(pokeId);
    expect(pokeName).toBe('bulbasaur');
  });
  test('should return missingno if the pokemon does not exist', async () => {
    const pokeId = 1500;
    const pokeName = await getPokemonById(pokeId);
    expect(pokeName).toBe('missingno');
  });
});
