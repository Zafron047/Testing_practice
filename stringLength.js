const stringLength = (string) => {
    const minLength = 1;
    const maxLength = 10;
  
    if (string.length < minLength || string.length > maxLength) {
      throw new Error('String length must be between 1 and 10 characters.');
    }
  
    return string.length;
  }

export default stringLength;

console.log(stringLength('Hello'));