const reverseString = (string) => {
  if (string === '') {
    throw new Error('String is empty.');
  }
  return string.split('').reverse().join('');
};

console.log(reverseString('originalString'));

export default reverseString;