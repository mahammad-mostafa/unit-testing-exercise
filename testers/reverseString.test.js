const reverseString = require('../units/reverseString.js');

describe('Testing reverseString function', () => {
  test('The string "bat" should be reversed to "tab"', () => {
    expect(reverseString('bat')).toMatch('tab');
  });
});