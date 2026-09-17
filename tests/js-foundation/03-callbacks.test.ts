import { describe, expect, test } from 'vitest';
import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('03-callbacks.ts', () => {
  test('getUserById should return an error if user does not exist', () => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err?.message).toBe(`No user found with the id: ${id}`);
      expect(user).toBeUndefined();
    });
  });
  test('getUserById should return john doe when id is 1', () => {
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBe(null);
      expect(user?.name).toBe('john doe');
      expect(user?.id).toBe(1);
      expect(user).not.toBe(null);
      expect(user).toEqual({
        id: 1,
        name: 'john doe',
      });
    });
  });
});
