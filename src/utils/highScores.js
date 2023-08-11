const HIGHSCORES = 'HIGHSCORES';

export function retrieveHighScores() {
    let highScores = localStorage.getItem(HIGHSCORES);
    return JSON.parse(highScores) ?? [];
}

export function saveHighScores(array) {
    localStorage.setItem(HIGHSCORES, JSON.stringify(array));
}

export function determineNewHighScore(highScoresArray, currentScore) {
    let result = 0;

    // Increments result variable if the length of the highScoresArray is at least as long as the current value of result and the current score is less than or equal to the highscore held at the same index as the current value of result. So a tie will land after a saved score of equal points.
    while (result < highScoresArray.length && currentScore <= highScoresArray[result].score) {
        result++;
    }
    
    return result;
}