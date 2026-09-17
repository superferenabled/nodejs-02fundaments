import { describe, expect, test } from 'vitest';
import { characters } from '../../src/js-foundation/02-destructuring';

describe('02-destructuring', () => {
  test('characters should contain flash and superman', () => {
    expect(characters).toContain('flash');
    expect(characters).toContain('superman');
  });

  test('first and second characters to be flash and aquaman', () => {
    const [flash, aquaman] = characters;
    expect(flash).toBe('flash');
    expect(aquaman).toBe('aquaman');
  });
});
