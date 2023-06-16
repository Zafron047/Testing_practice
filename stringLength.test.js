import stringLength from './stringLength';

// Rest of your tests...


 // AAA Tests
 test('stringLength', () => {
    // Arrange
    const validString = 'Hello';
    const emptyString = '';
    const longString = 'This is a long string.';
  
    // Act & Assert
    expect(stringLength(validString)).toBe(5); // Valid string, expected length: 5
  
    expect(() => {stringLength(emptyString);}).toThrow('String length must be between 1 and 10 characters.'); // Empty string, throws an error
  
     expect(() => { stringLength(longString) }).toThrow('String length must be between 1 and 10 characters.'); // Long string, throws an error
  });
  