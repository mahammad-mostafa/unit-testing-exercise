const stringLength = require('../units/stringLength.js');

describe('Testing stringLength function', () => {
  test('Testing length of "word" string which in range and equals 4', () => {
    expect(stringLength('word')).toEqual(4);
  });
  test('Testing length of empty sting "" which is out of range and throws an error', () => {
    expect(() => stringLength('')).toThrow('Value out of range!');
  });
  test('Testing length of "optimization" string which is out of range and throws an error', () => {
    expect(() => stringLength('optimization')).toThrow('Value out of range!');
  });
});