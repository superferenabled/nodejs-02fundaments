import {describe, test, expect} from 'vitest';

describe('app.ts', () => {
    test('should be true', () => {
        const num1 =10;
        const num2 = 20
        const result = num1 + num2;

        expect(result).toBe(30);
    });
})