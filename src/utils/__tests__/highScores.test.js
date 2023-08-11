import { retrieveHighScores, determineNewHighScore } from "../highScores";

test('determineNewHighScore', () => {
    const result = determineNewHighScore([], 1000);
    expect(result).toEqual(0);
});

test('determineNewHighScore', () => {
    const result = determineNewHighScore([{score: 2000}, {score: 2000}, {score: 2000}], 2500);
    expect(result).toEqual(0);
});

test('determineNewHighScore', () => {
    const result = determineNewHighScore([{score: 5000}, {score: 3000}, {score: 2000}], 2500);
    expect(result).toEqual(2);
});

test('determineNewHighScore', () => {
    const result = determineNewHighScore([{score: 5000}, {score: 3000}, {score: 3000}, {score: 3000}, {score: 3000}, {score: 3000}, {score: 3000}, {score: 3000}, {score: 3000}, {score: 2500}], 2500);
    expect(result).toEqual(10);
});