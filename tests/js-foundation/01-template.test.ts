import { emailTemplate } from '../../src/js-foundation/01-template';
import { describe, expect, test } from 'vitest';

describe('js-foundation/01-template.ts', () => {
  test('emailtemplate should contain a greeing', () => {
    expect(emailTemplate).toContain('Hi,');
  });

  test('email template should contain {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
