import { retrieveHighScores, determineNewHighScore } from "./highScores";

test('determineNewHighScore', () => {
    const result = determineNewHighScore([], 2500);
    expect(result).toEqual(0);
});

test('determineNewHighScore', () => {
    const result = determineNewHighScore([2000, 2000, 2000], 2500);
    expect(result).toEqual(0);
});

test('determineNewHighScore', () => {
    const result = determineNewHighScore([5000, 3000, 2000], 2500);
    expect(result).toEqual(2);
});

test('determineNewHighScore', () => {
    const result = determineNewHighScore([5000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 2500], 2500);
    expect(result).toEqual(10);
});