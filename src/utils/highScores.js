const HIGHSCORES = 'HIGHSCORES';

export function retrieveHighScores() {
    return localStorage.getItem(HIGHSCORES) ?? [
        { initials: 'WTG', score: 2000 }
    ];
}

export function determineNewHighScore(highScoresArray, currentScore) {
    let result = 0;

    // Increments result variable if the length of the highScoresArray is at least as long as the current value of result and the current score is less than or equal to the highscore held at the same index as the current value of result. So a tie will land after a saved score of equal points.
    while (result <= highScoresArray.length && currentScore <= highScoresArray[result]) {
        result++;
    }
    
    return result;
}