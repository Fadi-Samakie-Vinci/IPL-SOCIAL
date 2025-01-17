const passwordChecker = require('../src/passwordChecker');

describe('Password Checker', () => {
  it('should fail if less than 8 characters', () => {
    expect(passwordChecker('Ab!1')).toBe(false);
  });

  it('should fail if no special character', () => {
    expect(passwordChecker('Abcd1234')).toBe(false);
  });

  it('should fail if no digit', () => {
    expect(passwordChecker('Abcd!!!!')).toBe(false);
  });

  it('should fail if it contains "IPL" (case insensitive)', () => {
    expect(passwordChecker('AbcdIPL123')).toBe(false);
    expect(passwordChecker('abcdipl123!')).toBe(false);
  });

  it('should pass if all conditions are met', () => {
    expect(passwordChecker('Abcd!1234')).toBe(true);
  });
});
