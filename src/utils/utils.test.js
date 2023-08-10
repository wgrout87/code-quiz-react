import { retrieveHighScores, determineNewHighScore } from "./highScores";

test('determineNewHighScore', () => {
    const results = determineNewHighScore([], 2500);
    expect(results.newHighScore).toBe(true);
    expect(results.positionInArray).toEqual(0);
});