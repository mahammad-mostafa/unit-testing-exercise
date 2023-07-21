const stringLength = require('../units/stringLength.js');

describe('Testing stringLength function', () => {
  test('The "word" string is in range and equals 4', () => {
    expect(stringLength('word')).toEqual(4);
  });
  test('An empty string "" is out of range and throws an error', () => {
    expect(() => stringLength('')).toThrow('Value out of range!');
  });
  test('Word "optimization" is out of range and throws an error', () => {
    expect(() => stringLength('optimization')).toThrow('Value out of range!');
  });
});