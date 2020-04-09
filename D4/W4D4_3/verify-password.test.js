const passwordVerifier = require('./verify-password.js');

test('password fulfills all requirements', () => {
    const highestScore = {score: 5, valid: true};
    const password = "Passw0rd";
    expect(passwordVerifier(password)).toMatchObject(highestScore);
})

test('password fulfills edge requirements', () => {
    const highestScore = {score: 3, valid: true};
    const password = "password";
    expect(passwordVerifier(password)).toMatchObject(highestScore);
})

test('password fulfills not enough requirements', () => {
    const highestScore = {score: 2, valid: false};
    const password = "passwordx";
    expect(passwordVerifier(password)).toMatchObject(highestScore);
})

test('empty password does not fulfill requirements', () => {
    const highestScore = {score: 0, valid: false};
    const password = "";
    expect(passwordVerifier(password)).toMatchObject(highestScore);
})

test('password does not fulfill lowercase requirement', () => {
    const highestScore = {score: 0, valid: false};
    const password = "PIET";
    expect(passwordVerifier(password)).toMatchObject(highestScore);
})