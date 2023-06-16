import reverseString from "./reverseString.js";

test('reverseString function', () => {
  // Test case 1: Reversing a simple string
  expect(reverseString('Hello')).toBe('olleH');

  // Test case 2: Reversing a string with whitespace and special characters
  expect(reverseString('Hello, world!')).toBe('!dlrow ,olleH');

  // Test case 3: Reversing an empty string
    expect(() => { reverseString('') }).toThrow('String is empty.');

  // Test case 4: Reversing a string with only one character
  expect(reverseString('A')).toBe('A');

  // Test case 5: Reversing a string with repeating characters
  expect(reverseString('aaaaaa')).toBe('aaaaaa');
});
