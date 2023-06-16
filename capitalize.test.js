import capitalize from './capitalize.js';

test('capitalize function', () => {
  // Test case 1: Capitalize the first character of a word
  expect(capitalize('hello')).toBe('Hello');

  // Test case 2: Capitalize the first character of a sentence
  expect(capitalize('this is a sentence.')).toBe('This is a sentence.');

  // Test case 3: Capitalize the first character of a single character string
  expect(capitalize('a')).toBe('A');
});
