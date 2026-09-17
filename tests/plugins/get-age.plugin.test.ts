import { describe, expect, test, vi } from 'vitest';
import { getAge } from '../../src/plugins';

describe('get-age.plugin.ts', () => {
  test('getAge() should return the age of a person', () => {
    const birthdate = '1988-10-22';
    const age = getAge(birthdate);
    expect(typeof age).toBe('number');
  });

  test('getAge() return current age', () => {
    const birthdate = '1988-10-22';
    const age = getAge(birthdate);
    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculatedAge);
  });

  test('getAge should return 0 years', () => {
    const spy = vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2077);
    const birthdate = '2077-10-22';
    const age = getAge(birthdate);

    expect(age).toBe(0);
  });
});
