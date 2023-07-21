const calculator = require('../units/calculator.js');

describe('Calculator object functions test', () => {
  describe('Testing the add function', () => {
    test('Adding 3 + 2 should equal 5', () => {
      expect(calculator.add(3, 2)).toEqual(5);
    });
    test('Adding 1000000000 + 1000000000 should equal 2000000000', () => {
      expect(calculator.add(1000000000, 1000000000)).toEqual(2000000000);
    });
    test('Adding (-3) + (-2) should equal -5', () => {
      expect(calculator.add(-3, -2)).toEqual(-5);
    });
  });
  describe('Testing the subtract function', () => {
    test('Subtracting 3 - 2 should equal 1', () => {
      expect(calculator.subtract(3, 2)).toEqual(1);
    });
    test('Subtracting 1000000000 - 1000000000 should equal 0', () => {
      expect(calculator.subtract(1000000000, 1000000000)).toEqual(0);
    });
    test('Subtracting (-3) - (-2) should equal -5', () => {
      expect(calculator.subtract(-3, -2)).toEqual(-1);
    });
  });
  describe('Testing the multiply function', () => {
    test('Multiplying 3 * 2 should equal 6', () => {
      expect(calculator.multiply(3, 2)).toEqual(6);
    });
    test('Multiplying 1000000000 * 1000000000 should equal 1000000000000000000', () => {
      expect(calculator.multiply(1000000000, 1000000000)).toEqual(1000000000000000000);
    });
    test('Multiplying (-3) * (-2) should equal 6', () => {
      expect(calculator.multiply(-3, -2)).toEqual(6);
    });
  });
  describe('Testing the divide function', () => {
    test('Dividing 3 / 2 should equal 1.5', () => {
      expect(calculator.divide(3, 2)).toEqual(1.5);
    });
    test('Dividing 1000000000 / 1000000000 should equal 1', () => {
      expect(calculator.divide(1000000000, 1000000000)).toEqual(1);
    });
    test('Dividing (-3) / (-2) should equal 1.5', () => {
      expect(calculator.divide(-3, -2)).toEqual(1.5);
    });
  });
});