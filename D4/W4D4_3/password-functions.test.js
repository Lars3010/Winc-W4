const passwordFunctions = require('./password-functions.js');

//password not empty
test('password is not empty', () => {
    expect(passwordFunctions.isNotBlank(null)).toBeFalsy();
})

test('password is not empty', () => {
    expect(passwordFunctions.isNotBlank("password")).toBe(true);
})

//length smaller than 8
test('password is smaller than 8 characters', () => {
    expect(passwordFunctions.isLessThan8Chars("123456789")).toBe(false);
})

test('password is smaller than 8 characters', () => {
    expect(passwordFunctions.isLessThan8Chars("12345678")).toBe(true);
})

//must have uppercase
test('password must have uppercase characters', () => {
    expect(passwordFunctions.hasUppercase('a')).toBe(false);
})

test('password must have uppercase characters', () => {
    expect(passwordFunctions.hasUppercase('A')).toBe(true);
})

//must have lowercase
test('password must have lowercase characters', () => {
    expect(passwordFunctions.hasLowercase('A')).toBe(false);
})

test('password must have lowercase characters', () => {
    expect(passwordFunctions.hasLowercase('a')).toBe(true);
})

//must contain numbers
test('password must contain numbers', () => {
    expect(passwordFunctions.hasDigit('x')).toBe(false)
})

test('password must contain numbers', () => {
    expect(passwordFunctions.hasDigit(1)).toBe(true)
})


