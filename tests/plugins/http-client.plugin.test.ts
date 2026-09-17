import { describe, expect, test } from 'vitest';
import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('http-client.plugin.ts', () => {

  test('httpClientPlugin.get should return a string', async () => {
    const data = await httpClientPlugin({
      headers: { 'Content-Type': 'application/json' },
    }).get('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: expect.any(Boolean),
    });
  });

  test('httpClientPlugin should have post, put and delete methods', async () => {
    const http = await httpClientPlugin({
      headers: { 'Content-Type': 'application/json' },
    });
    expect(http).toEqual({
      get: expect.any(Function),
      post: expect.any(Function),
      put: expect.any(Function),
      delete: expect.any(Function),
    });
    expect(typeof http.post).toBe('function');
    expect(typeof http.put).toBe('function');
    expect(typeof http.delete).toBe('function');
  });
  
});
