import isNaN from './isNaN';

describe('isNaN function tests', () => {
  // Test case for NaN
  it('should return true for NaN', () => {
    expect(isNaN(NaN)).toBe(true);
  });

  // Test cases for valid numbers
  it('should return false for valid numbers', () => {
    expect(isNaN(123)).toBe(false);
    expect(isNaN(-456)).toBe(false);
    expect(isNaN(0)).toBe(false);
    expect(isNaN(Infinity)).toBe(false);
    expect(isNaN(-Infinity)).toBe(false);
  });

  // Test cases for strings that represent valid numbers
  it('should return false for string numbers', () => {
    expect(isNaN('123')).toBe(false);
    expect(isNaN('0')).toBe(false);
    expect(isNaN('-456')).toBe(false);
  });

  // Test cases for strings that do not represent numbers
  it('should return false for non-numeric strings', () => {
    expect(isNaN('hello')).toBe(false);
    expect(isNaN('123abc')).toBe(false);
  });


  // Test cases for boolean values
  it('should return false for boolean values', () => {
    expect(isNaN(true)).toBe(false);
    expect(isNaN(false)).toBe(false);
  });


  // Test cases for special values
  it('should return true for invalid numbers like NaN', () => {
    expect(isNaN(Number.NaN)).toBe(true);
    expect(isNaN(Number('Not a Number'))).toBe(true);
  });
});
