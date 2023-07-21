const capitalize = require('../units/capitalize.js');

describe('Testing the capitalize function', () => {
  test('Capitalizing "excellence" should return "Excellence"', () => {
    expect(capitalize('excellence')).toMatch('Excellence');
  });
});